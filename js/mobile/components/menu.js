// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
  <style>
/* CSS ____________________________________________________ */
  #hamburger {
    position: relative;
    z-index: 2;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  #hamburger > div {
    background: black;
    transition: all .2s ease-in-out;
  }
  .rectangle {
    width: 36px;
    height: 5px;
    margin: 4px;
    border-radius: 5px;
  }
  .line-1 {
    transform: rotateZ(45deg) translateY(12px);
    background: white!important;
  }
  .line-2 {
    opacity: 0;
  }
  .line-3 {
    transform: rotateZ(-45deg) translateY(-12px);
    background: white!important;
  }
  .move-right {
    transform: translateX(4px);
  }
  #menu {
    position: absolute;
    z-index: 1;
    top: 10vh;
    right: 2vw;
    left: 2vw;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 3rem;
    background: white;
    transform: translateX(100vw);
    transition: transform .3s ease-in-out .1s;
  }
  #menu > div {
    padding: 20px;
    border-bottom: 1px solid whitesmoke;
  }
  .slide-left {
    transform: translateX(0)!important;
  }
  </style>
<!-- HEADER TEMPLATE -->
  <div id="hamburger">
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
  </div>
  <div id="menu">
    <div>radio</div>
    <div>ici</div>
    <div>et</div>
    <div>maintenant</div>
  </div>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class Menu extends HTMLElement {
  constructor() {
    super()
    // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
    this.attachShadow({mode : 'open'})
    // Attach the 'template' as defined above in a const variable
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // Menu elements storage
    this.one = this.shadowRoot.querySelector("#hamburger > div:nth-child(1)")
    this.two = this.shadowRoot.querySelector("#hamburger > div:nth-child(2)")
    this.three = this.shadowRoot.querySelector("#hamburger > div:nth-child(3)")
    this.menu = this.shadowRoot.querySelector("#menu")
    this.button = this.shadowRoot.querySelector("#hamburger")
    
  }
// CUSTOM METHODS
hamburgerClick() {
  this.button.addEventListener('click', () => {
    this.one.classList.toggle("line-1")
    this.two.classList.toggle("line-2")
    this.three.classList.toggle("line-3")
    this.menu.classList.toggle("slide-left")
    this.button.classList.toggle("move-right")
    document.querySelector("#smoke-screen").classList.toggle("z-index-reset")
  })
}
// LIFECYCLE METHODS
  connectedCallback() {
    this.hamburgerClick()
  }
}

// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('menu-m', Menu)
