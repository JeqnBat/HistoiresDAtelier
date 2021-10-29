// 0. NESTED COMPONENT ____________________________________ */
import HomeSection from './_homeSection.js'
import HeaderTitle from './_homeHeader.js'
import Decoration from './c_decoration.js'
import FaireParts from './c_faireParts.js'
import Stylisme from './c_stylisme.js'
import HeaderTop from './g_headerTop.js'
import Footer from './g_footer.js'
import BreadScrum from './p_breadScrum.js'
import SectionHeader from './p_header.js'

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
    /**
     * <b>DESCR:</b><br>
     * Attaches components to the wrapper
     * 
     * @method
     * @param {string} thisPage the page's name
     */
    attachComponentsTo(thisPage) {
        const header = document.createElement('header-top')
        this.shadowRoot.querySelector('header').appendChild(header)

        if (thisPage === "index") {
            const title = document.createElement('home-header')
            const homeSection = document.createElement('home-section')
            this.shadowRoot.querySelector('main').appendChild(homeSection)
            this.shadowRoot.querySelector('header').appendChild(title)
        } else {
            const sectionHeader = document.createElement('section-header')
            const newSection = document.createElement(`${thisPage}-section`)
            const breadScrum = document.createElement('bread-scrum')
            this.shadowRoot.querySelector('header').appendChild(sectionHeader)
            this.shadowRoot.querySelector('header').appendChild(breadScrum)
            this.shadowRoot.querySelector('main').appendChild(newSection)
        }
        const footer = document.createElement('footer-m')
        this.shadowRoot.querySelector('footer').appendChild(footer)
    }
    // LIFECYCLE METHODS
        connectedCallback() {
            this.attachComponentsTo(pageName)
    }
}

// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('page-wrapper', Wrapper)
