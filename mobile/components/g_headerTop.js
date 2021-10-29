// 0. NESTED COMPONENT ____________________________________ */
import Menu from './g_menu.js'
// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
    <style>
/* CSS ____________________________________________________ */
    :host {
        min-height: 50px;
        display: flex;
        flex-direction: column;
    }
    a, a:visited, a:hover, a:active {
        text-decoration: none;
        color: rgb(40, 42, 44);
    }
    #lang {
        text-align: center;
        width: 36px;
    }
    #basket {
        height: 25px;
        width: 25px;
        background: center / cover no-repeat url('./svg/basket.svg');
    }
    #header-menu {
        position: fixed;
        width: 93%;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(240, 239, 234);
    }
    </style>
<!-- HEADER TEMPLATE -->
    <div id="header-menu">
        <div id="lang">FR</div>
        <div id="basket"></div>
    </div>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class HeaderTop extends HTMLElement {
    constructor() {
        super()
        // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
        this.attachShadow({mode : 'open'})
        // Attach the 'template' as defined above in a const variable
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    // CUSTOM METHOD
    attachMenu() {
        const menuM = document.createElement('menu-m')
        this.shadowRoot.querySelector('#header-menu').appendChild(menuM)
    }
    // LIFECYCLE METHODS
    connectedCallback() {
        this.attachMenu()
    }
}
// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('header-top', HeaderTop)
