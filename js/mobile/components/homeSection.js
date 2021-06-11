// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
    <style>
/* CSS ____________________________________________________ */
    .section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
        background: coral;
        margin: 10px 0;
    }
    </style>
<!-- HEADER TEMPLATE -->
    <div class="section">
        <h2>STYLISME</h2>
    </div>
    <div class="section">
        <h2>FAIRE-PARTS</h2>
    </div>
    <div class="section">
        <h2>DÉCORATION</h2>
    </div>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class homeSection extends HTMLElement {
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
window.customElements.define('home-section', homeSection)
