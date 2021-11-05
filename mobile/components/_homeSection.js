// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
  <style>
/* CSS ____________________________________________________ */
  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22vh;
    margin: 15px;
  }
  section > h2 {
    background-color:  rgb(240, 239, 234, .3);
    padding: 15px;
    font-size: 2rem;
    text-transform: uppercase;
  }
  </style>
<!-- HOME SECTION TEMPLATE -->
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class HomeSection extends HTMLElement {
  constructor() {
    super()
    // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
    this.attachShadow({mode : 'open'})
    // Attach the 'template' as defined above in a const variable
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.categories = data.categories
  }
  // CUSTOM METHODS
  printComponent(categories) {
    // Use every to iterate through array (forEach can't use "break" instruction)
    // Here we return FALSE if element visibility is FALSE,
    // else we print the element's details onto the component
    categories.every((element) => {
      if(!element.mobile.visible) {
        return false
      }
      let newSection = document.createElement('section')
      newSection.innerHTML = `
        <section>
          <h2><a href="${element.href}">${element.name[lang]}</a></h2>
        </section>`
      newSection.style.background = `center / cover no-repeat url("${element.mobile.bg}")`

      return this.shadowRoot.appendChild(newSection)
    })
  }
  // LIFECYCLE METHODS
  connectedCallback() {
    this.printComponent(this.categories)
  }
}
// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('home-section', HomeSection)
