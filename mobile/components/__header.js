// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
	<style>
/* CSS ____________________________________________________ */
	:host {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 2rem;
		margin-top: 20px;
	}
	a, a:visited, a:hover, a:active {
		text-decoration: none;
		color: rgb(40, 42, 44);
	}
	.column {
		width: 50px;
		text-align: center;
		font-size: 3rem;
	}
	#page-title {
		font-size: 2rem;
		text-transform: uppercase;
		text-align: center;
	}
  	</style>
<!-- HEADER TEMPLATE -->
	<div class="column"><a href="./index.html"><</a></div>
	<div id="page-title"></div>
	<div class="column"></div>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class SectionHeader extends HTMLElement {
	constructor() {
		super()
		// Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
		this.attachShadow({mode: 'open'})
		// Attach the 'template' as defined above in a const variable
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}
	// CUSTOM METHODS
	render(pageName) {
		let pageTitle = this.shadowRoot.getElementById('page-title')
		pageTitle.innerText = pageName
	}
	// LIFECYCLE METHODS
	connectedCallback() {
		this.render(pageName)
	}
}
// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */
window.customElements.define('section-header', SectionHeader)
