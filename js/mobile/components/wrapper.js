// 0. NESTED COMPONENT ____________________________________ */
import Header from './header.js'
import homeSection from './homeSection.js'
import Footer from './footer.js'

// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
    <style>
/* CSS ____________________________________________________ */
    :host {
        display: flex;
        flex-direction: column;
        padding: 2vw;
    }
    </style>
<!-- TEMPLATE -->
    <header></header>
    <section></section>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class Wrapper extends HTMLElement {
    constructor() {
        super()
        // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
        this.attachShadow({mode : 'open'})
        // Attach the 'template' as defined above in a const variable
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.attachComponents()
    }
    // CUSTOM METHODS
    attachComponents() {
        const header = document.createElement('header-m')
        this.shadowRoot.querySelector('header').appendChild(header)

        const homeSection = document.createElement('home-section')
        this.shadowRoot.querySelector('section').appendChild(homeSection)
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
window.customElements.define('wrapper-m', Wrapper)
