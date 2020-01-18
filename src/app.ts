import "@babel/polyfill";
import { LitElement, html, css, property, TemplateResult } from "lit-element";
import "./view.ts";
import "./Search";

class Layout extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 100vh;
        background: lightgrey;
      }
    `;
  }

  render() {
    return html`
      <search-view></search-view>
    `;
  }
}

customElements.define("search-layout", Layout);
