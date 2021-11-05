// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
    <style>
/* CSS ____________________________________________________ */
    :host {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background-color: rgb(240, 239, 234);
      min-height: 200px;
    }
    #social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    #social-icons > div {
      margin: 10px;
    }
    .social-icon {
      height: 35px;
      width: 35px;
    }
    .insta {
      background: center / cover no-repeat url('./svg/instagram.svg');
    }
    .facebook {
      background: center / cover no-repeat url('./svg/facebook.svg');
    }
    .pinterest {
      background: center / cover no-repeat url('./svg/pinterest.svg');
    }
    #legal {
      font-size: 1rem;
      color: rgb(40, 42, 44);
    }
    </style>
<!-- FOOTER TEMPLATE -->
  <div id="social-icons">
    <div class="social-icon insta"></div>
    <div class="social-icon facebook"></div>
    <div class="social-icon pinterest"></div>
  </div>
  <div id="legal">
    Mentions légales
  </div>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class Footer extends HTMLElement {
  constructor() {
    super()
    // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
    this.attachShadow({mode : 'open'})
    // Attach the 'template' as defined above in a const variable
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
// CUSTOM METHODS

// LIFECYCLE METHODS
  connectedCallback() {
  }
}
// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('footer-m', Footer)
