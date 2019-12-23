import { html, LitElement } from 'lit-element';
import style from './blog-component-styles.js';

class BlogComponent extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello} blog-component</h2>
      `;
    }
}

window.customElements.define("blog-component", BlogComponent);
