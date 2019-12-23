import { html, LitElement } from 'lit-element';
import style from './entry-component-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';


class EntryComponent extends LitElement {
  static get properties() {
    return {
      article: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.article ={
      date: '',
      title:'',
      body:'',
      author :''
    }
  }

  render() {
    return html`
    <paper-card >
      <div class="card-content">
        <h2>{this.article.title}</h2>
        <p>Date : {this.article.date}</p>
        <p>Author :${this.article.author}</p>
        <p>{this.article.}</p>
      </div>
      <div class="card-actions">
        <paper-button>Share</paper-button>
        <paper-button>Explore!</paper-button>
      </div>
    </paper-card>
          `;
    }
}

window.customElements.define("entry-component", EntryComponent);
