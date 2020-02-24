import "@babel/polyfill";
import { LitElement, html, css, property, TemplateResult } from "lit-element";
import { getMethod } from "./methods";
import "./Search";

class View extends LitElement {
  @property({ type: Array }) movies;
  @property({ type: Array }) filteredMovies;
  @property({ type: String }) chosenMovie;

  constructor() {
    super();
    this.movies = [];
    this.filteredMovies = [];
    this.chosenMovie = "Ala ma kota";
  }

  getMovieList() {
    getMethod("http://localhost:3000/shows")
      .then(response => {
        (this.movies = response), (this.filteredMovies = response);
      })
      .catch(error => console.log(error));
    console.log(this.movies);
  }

  connectedCallback() {
    super.connectedCallback();
    this.getMovieList();
    document.addEventListener(
      "user-input",
      this.getNewFilteredMovieList.bind(this)
    );
  }

  getNewFilteredMovieList(event) {
    const eventDetail = event.detail.filteredMovies;
    this.filteredMovies = Object.assign([], eventDetail);
  }

  showMovieTitles() {
    console.log("show Movies");
    return this.filteredMovies.map(movie => {
      return html`
        <li>${movie.title}</li>
        <li>${movie.description}</li>
      `;
    });
  }

  render() {
    return html`
      <div>
        <h1>Search movies</h1>
        <search-element
          .chosenMovie=${this.chosenMovie}
          .movies=${this.movies}
        ></search-element>
        <ul>
          ${this.showMovieTitles()}
        </ul>
      </div>
    `;
  }
}

customElements.define("search-view", View);
