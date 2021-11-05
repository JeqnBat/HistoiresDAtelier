// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
  <style>
/* CSS ____________________________________________________ */
  :host {
      display: flex;
      flex-direction: column;
  }
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: rgb(40, 42, 44);
  }
  #main-title {
      font-family: 'kallinsharegular';
      font-size: 2rem;
      text-align: center;
  }
  #subtitle {
      text-align: center;
      line-height: 0;
  }
  .spacer {
      height: 2vh;
  }
  </style>
<!-- HOME HEADER TEMPLATE -->
  <div id="main-title">
    <a href="index.html">
        <h1>Histoires d'atelier</h1>
    </a>
  </div>
  <div id="subtitle">
    <p>sous-titre . Atelier créatif</p>
  </div>
  <div class="spacer">
  </div>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class HomeHeader extends HTMLElement {
  constructor() {
    super()
    // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
    this.attachShadow({mode : 'open'})
    // Attach the 'template' as defined above in a const variable
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  // CUSTOM METHODS
  // LIFECYCLE METHODS
  connectedCallback() {
  }
}
// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('home-header', HomeHeader)
