// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
    <style>
/* CSS ____________________________________________________ */
    :host {
      color: rgb(40, 42, 44);
      height: auto;
      width: 100%;
      font-size: .9rem;
    }
    :host > div {
      display: flex;
      align-items: center;
      padding: 20px;
      opacity: .7;
    }
    :host > div > img {
      padding-right: 5px;
    }
    a, a:visited, a:hover, a:active {
      color: blue;
      text-decoration: none;
    }
    </style>
<!-- BREADSCRUM TEMPLATE -->
    <div></div>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class BreadScrum extends HTMLElement {
  constructor() {
    super()
    // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
    this.attachShadow({mode: 'open'})
    // Attach the 'template' as defined above in a const variable
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  // CUSTOM METHODS
  printBreadScrum(onThisPage) {
    const breadScrum = this.shadowRoot.querySelector('div')
    breadScrum.innerHTML = `<img src="./svg/house.svg"><a href="./index.html">accueil</a>&nbsp;> ${onThisPage}`
  }
  // LIFECYCLE METHODS
  connectedCallback() {
    this.printBreadScrum(pageName)
  }
}
// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('bread-scrum', BreadScrum)
