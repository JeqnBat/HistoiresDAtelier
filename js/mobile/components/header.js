// 0. NESTED COMPONENT ____________________________________ */
import Menu from './menu.js'

// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
    <style>
/* CSS ____________________________________________________ */
    :host {
        min-height: 10vh;
        display: flex;
        flex-direction: column;
    }
    #lang {
        margin-left: 10vw;
    }
    #main-title {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    #social-icons {
        margin: 0 auto;
    }
    .social-icon {
        font-size: 2rem;
        margin: 2px;
    }
    #subtitle {
        text-align: center;
        line-height: 0;
    }
    .spacer {
        height: 4vh;
    }
    </style>
<!-- HEADER TEMPLATE -->
    <div id="lang">FR | EN</div>
    <div id="main-title">
        <h1>HISTOIRES D'ATELIER</h1>
        <div>P</div>
        <div id="hamburger"></div>
    </div>
    <div id="social-icons">
        <span class="social-icon">A</span>
        <span class="social-icon">B</span>
        <span class="social-icon">C</span>
    </div>
    <div id="subtitle">
        <p>subtitle . kikoo</p>
    </div>
    <div class="spacer">
    </div>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class Header extends HTMLElement {
    constructor() {
        super()
        // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
        this.attachShadow({mode : 'open'})
        // Attach the 'template' as defined above in a const variable
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.attachMenu()
    }
    attachMenu() {
        const menuM = document.createElement('menu-m')
        this.shadowRoot.querySelector('#hamburger').appendChild(menuM)
    }
    // LIFECYCLE METHODS
    connectedCallback() {
    }
}
// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('header-m', Header)
