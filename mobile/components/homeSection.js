// 0. IMPORT DATA _________________________________________ */
import {data} from '../../js/index.js'
// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
    <style>
/* CSS ____________________________________________________ */
    a, a:visited, a:hover, a:active {
        text-decoration: none;
        color: inherit
    }
    .section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 22vh;
        margin: 15px;
    }
    .section > h2 {
        background-color:  rgb(240, 239, 234, .3);
        padding: 15px;
        font-size: 2rem;
        text-transform: uppercase;
    }
    .bg-stylisme {
        background: center / cover no-repeat url("./mobile/img/home/stylisme.png");
    }
    .bg-décoration {
        background: center / cover no-repeat url("./mobile/img/home/deco.jpg");
    }
    .bg-faire-parts {
        background: center / cover no-repeat url("./mobile/img/home/faire-parts.jpg");
    }
    </style>
<!-- HEADER TEMPLATE -->
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
    this.sections = data.homeSections
  }
// CUSTOM METHODS
  printPage(list) {
    for(const element of list) {
        let section = document.createElement('section')
        section.innerHTML = `<h2><a href="${element.href}/index.html">${element.name}</a></h2>`
        section.classList.add('section', `bg-${element.name}`)
        this.shadowRoot.appendChild(section)
    }
  }
// LIFECYCLE METHODS
  connectedCallback() {
      this.printPage(this.sections)
  }
}
// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('home-section', homeSection)
