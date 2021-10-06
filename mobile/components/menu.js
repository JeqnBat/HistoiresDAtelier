// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
<style>
/* CSS ____________________________________________________ */
  :host {
    --pseudo-content = '-';
  }
  .dark {
    color: rgb(110, 110, 110);
    font-size: 1.5rem;
  }
  .active {
    left: 0!important;
  }
  #hamburger {
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  .rectangle {
    width: 26px;
    height: 2px;
    margin: 5px;
    background: rgb(40, 42, 44, .5);
  }
  #nav-bar {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: -100vw;
    text-transform: uppercase;
    background: rgb(240, 239, 234);
    font-family: monospace;
    transition: left .2s ease-in-out .1s;
  }
  #nav-bar > div:not(:first-child) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    color: rgb(40, 42, 44, .75);
    padding: 10px 30px;
  }
  #menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 2rem;
    color: rgb(40, 42, 44, .75);
    padding: 0px 30px;
  }
  #menu > p {
    margin: 10px 25px;
    padding-bottom: 3px;
  }
  #menu > p::first-letter {
    font-size: 2.5rem;
  }
  #cross :nth-child(1) {
    transform: rotate(45deg);
    width: 19px;
    height: 1px;
    margin: 0 0 -1px 0;
    background: rgb(40, 42, 44);
  }
  #cross :nth-child(2) {
    transform: rotate(-45deg);
    width: 19px;
    height: 1px;
    margin: 0;
    background: rgb(40, 42, 44);
  }
  .main-menu {
    list-style: none;
    font-size: 1.3rem;
    color: rgb(40, 42, 44, .8);
  }
  .main-menu > li {
    line-height: 50px;
  }
  .main-menu > li::before {
    position: absolute;
    right: 34px;
    font-family: 'arnoPro';
    font-size: 1.3rem;
    color: rgb(150, 152, 154);
    content: '+';
  }
  .main-menu > li.minus::before {
    position: absolute;
    right: 35px;
    font-family: 'arnoPro';
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: -1px;
    color: rgb(100, 102, 104);
    content: '--';
  }
  .sub-menu {
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s ease-in-out;
  }
  .sub-menu > li {
    line-height: 20px;
    list-style: none;
    font-size: 1.2rem;
    color: rgb(120, 122, 124);
    margin-left: -20px;
    padding-left: 0px;
  }
  .display {
    max-height: 400px;
  }
  </style>
<!-- MENU TEMPLATE -->
  <div id="hamburger">
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
  </div>
  <nav id="nav-bar">
    <div id="menu">
      <p>MENU</p>
      <div id="cross">
        <div class="rectangle"></div>
        <div class="rectangle"></div>
      </div>
    </div>
    <!-- CATEGORIES -->
    <ul class="main-menu">
      <li>faire-part
        <ul class="sub-menu">
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ul>
      </li>
      <li>stylisme - photo
        <ul class="sub-menu">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </li>
      <li>décoration
        <ul class="sub-menu">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </li>
      <li>à propos
        <ul class="sub-menu">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </li>
      <li>contact
        <ul class="sub-menu">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </li>
    </ul>
    <p></p>
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
    this.navBar = this.shadowRoot.querySelector('#nav-bar')
    this.hamburger = this.shadowRoot.querySelector('#hamburger')
    this.cross = this.shadowRoot.querySelector('#cross')
  }
  // CUSTOM METHODS
  hamburgerClick() {
    this.hamburger.addEventListener('click', () => {
      this.navBar.classList.toggle('active')
    })
  }
  crossClick() {
    this.cross.addEventListener('click', () => {
      this.navBar.classList.toggle('active')
    })
  }
  categoryClick() {
    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI' && e.target.parentNode.classList.value === "main-menu") {
        let subMenu = e.target.firstElementChild
        subMenu.classList.toggle('display')
        e.target.classList.toggle('minus')
      } else {
        return
      }
    })
  }
  
  // LIFECYCLE METHODS
  connectedCallback() {
    this.hamburgerClick()
    this.crossClick()
    this.categoryClick()
  }
  disconnectedCallback() {
    this.hamburger.removeEventListener()
    this.cross.removeEventListener()
    this.shadowRoot.removeEventListener()
  }
}

// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('menu-m', Menu)
