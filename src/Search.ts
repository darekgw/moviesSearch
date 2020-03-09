// wyszukiwarka w js

// description
// title

// const sh = shows.filter(e => `${e.title} ${e.description}`).includes(ref.to.input.value) dodać tu lowerCase

import "@babel/polyfill";
import { LitElement, html, css, property, TemplateResult } from "lit-element";

class Search extends LitElement {
  @property({ type: Array }) movies;
  @property({ type: Array }) filteredMovies;
  @property({ type: String }) chosenMovie;
  @property({ type: String }) userInput;

  constructor() {
    super();
    this.movies = [];
    this.filteredMovies = [];
    this.chosenMovie = "";
    this.userInput = "";
  }

  filterMovies(userInput) {
    this.filteredMovies = this.movies.filter(movie =>
      `${movie.title} ${movie.description}`
        .toLowerCase()
        .includes(userInput.toLowerCase())
    );
    console.log(this.filteredMovies);
    let userFilteredMovies = new CustomEvent("user-input", {
      detail: {
        filteredMovies: this.filteredMovies
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(userFilteredMovies);
  }

  updateUserInput(e) {
    console.log(e);
    const inputElement = this.shadowRoot.querySelector("input");
    this.filterMovies(inputElement.value);
    console.log(inputElement.value);
  }

  render() {
    return html`
        <input id="search" type="text" @input="${this.updateUserInput}"></input>
        <p>Chosen movie is ${this.chosenMovie}.</p>
        <p>This user input is: ${this.userInput}</p>
        `;
  }
}

customElements.define("search-element", Search);
