// 0. NESTED COMPONENT ____________________________________ */
import HeaderTop from './_headerTop.js'
import HeaderTitle from './_homeHeader.js'
import HomeSection from './_homeSection.js'
import Footer from './_footer.js'
import Decoration from './__decoration.js'
import FaireParts from './__invitations.js'
import Stylisme from './__styling.js'
import SectionHeader from './__header.js'
import BreadScrum from './__breadScrum.js'

// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
	<style>
/* CSS ____________________________________________________ */
	:host {
		display: flex;
		flex-direction: column;
		-webkit-animation: fadeIn .1s ease-in-out;
		animation: fadeIn .1s ease-in-out;
	}
	@-webkit-keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}
	header {
		z-index: 10;
	}
	main {
		z-index: 0;
	}
	</style>
<!-- WRAPPER TEMPLATE -->
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
		this.attachShadow({ mode: 'open' })
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
