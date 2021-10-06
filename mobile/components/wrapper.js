// 0. NESTED COMPONENT ____________________________________ */
import Header from './header.js'
import homeSection from './homeSection.js'
import Stylisme from './stylisme.js'
import Footer from './footer.js'

// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
    <style>
/* CSS ____________________________________________________ */
    :host {
        display: flex;
        flex-direction: column;
    }
    </style>
<!-- TEMPLATE -->
    <header></header>
    <main></main>
    <footer></footer>
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
    }
    // CUSTOM METHODS
    showData() {
    }
    /**
     * <b>DESCR:</b><br>
     * Returns the name of the page, stored as dataset attribute inside HTML tag
     * 
     * @method
     * @returns {string} the current html page name
     */
    pageIs() {
        return document.querySelector('html').dataset.pageName
    }
    /**
     * <b>DESCR:</b><br>
     * Attaches components to the wrapper
     * 
     * @method
     * @param {string} toPage the page's name
     */
    attachComponents(toPage) {
        const header = document.createElement('header-m')
        this.shadowRoot.querySelector('header').appendChild(header)

        switch(toPage) {
            case 'index' :
                const homeSection = document.createElement('home-section')
                this.shadowRoot.querySelector('main').appendChild(homeSection)
                break
            case 'stylisme' :
                const stylisme = document.createElement('stylisme-section')
                this.shadowRoot.querySelector('main').appendChild(stylisme)
                break
        }

        const footer = document.createElement('footer-m')
        this.shadowRoot.querySelector('footer').appendChild(footer)
    }
    // LIFECYCLE METHODS
        connectedCallback() {
            this.attachComponents(this.pageIs())
            this.showData()
    }
}

// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('wrapper-m', Wrapper)
