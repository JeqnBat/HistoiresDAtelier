// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
  <style>
/* CSS ____________________________________________________ */
  :host {
    font-size: 1.5rem;
  }
  #hamburger {
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  .rectangle {
    width: 30px;
    height: 3px;
    margin: 5px;
    background: black;
  }
  #nav-bar {
    cursor: pointer;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: -100vw;
    display: flex;
    text-transform: uppercase;
    background: white;
    position: fixed;
    z-index: 1;
    transition: left .2s ease-in-out .1s;
  }
  .active {
    left: 0!important;
  }
  .left {
    color: white;
    background: darkred;
    width: 32vw;
  }
  .left > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vh 0;
    border-bottom: 1px solid white;
  }
  .spacer {
    width: 6vw;
  }
  .middle {
    width: 55vw;
  }
  .middle .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5vh 0;
    border-bottom: 1px solid lightgrey;
  }
  #cross {
    opacity: .8;    
  }
  #cross :nth-child(1) {
    transform: rotate(45deg);
    height: 2px;
    margin: 0 0 -2px 0;
  }
  #cross :nth-child(2) {
    transform: rotate(-45deg);
    height: 2px;
    margin: 0;
  }
  .right {
    background: darkred;
    width: 1vw;
  }

  </style>
<!-- MENU TEMPLATE -->
  <div id="hamburger">
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
  </div>
  <nav id="nav-bar">
    <div class="left">
      <div>LOGO</div>
      <div>one</div>
      <div>two</div>
      <div>three</div>
      <div>four</div>
    </div>
    <div class="spacer"></div>
    <div class="middle">
      <div class="title">
        <div>TITRE CATEGORIE</div>
        <div id="cross">
          <div class="rectangle"></div>
          <div class="rectangle"></div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="right"></div>
  </nav>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first menu w/ web components
 */
export default class Menu extends HTMLElement {
  constructor() {
    super()
    // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
    this.attachShadow({mode : 'open'})
    // Attach the 'template' as defined above in a const variable
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // Menu elements storage
    this.navBar = this.shadowRoot.querySelector("#nav-bar")
    this.hamburger = this.shadowRoot.querySelector("#hamburger")
    this.cross = this.shadowRoot.querySelector("#cross")
  }
  // CUSTOM METHODS
  hamburgerClick() {
    this.hamburger.addEventListener('click', () => {
      this.navBar.classList.toggle("active")
    })
  }
  crossClick() {
    this.cross.addEventListener('click', () => {
      this.navBar.classList.toggle("active")
    })
  }
  // LIFECYCLE METHODS
  connectedCallback() {
    this.hamburgerClick()
    this.crossClick()
  }
}

// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('menu-m', Menu)
