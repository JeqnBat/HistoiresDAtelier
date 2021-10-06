// 0. NESTED COMPONENT ____________________________________ */
import Menu from './menu.js'
// 0. GET PAGE NAME TO DEFINE ROUTES ______________________ */
let pageName = document.querySelector('html').dataset.pageName
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
    a, a:visited, a:hover, a:active {
        text-decoration: none;
        color: rgb(40, 42, 44);
    }
    #lang {
        text-align: center;
    }
    #basket {
        height: 25px;
        width: 25px;
        background: center / cover no-repeat url('./mobile/img/icons/basket.svg');
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
    #main-title {
        font-family: 'kallinsharegular';
        font-size: 2rem;
        text-align: center;
        margin-top: 25px;
    }
    #subtitle {
        text-align: center;
        line-height: 0;
    }
    .spacer {
        height: 2vh;
    }
    </style>
<!-- HEADER TEMPLATE -->
    <div id="header-menu">
        <div id="lang">FR</div>
        <div id="basket"></div>
        <div id="hamburger-button"></div>
    </div>
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
        this.shadowRoot.querySelector('#hamburger-button').appendChild(menuM)
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
