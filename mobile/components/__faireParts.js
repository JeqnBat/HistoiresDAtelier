// 1. CREATE TEMPLATE _____________________________________ */
const template = document.createElement('template')
template.innerHTML = `
  <style>
/* CSS ____________________________________________________ */
  :host {
    text-align: center;
  }
  a, a:visited, a:active, a:hover {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: rgb(40, 42, 44);
  }
  .faire-parts {
    width: 100%;
    overflow: hidden;
  }
  #wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    width: 260vw;
    margin-left: 6vw;
    transition: transform .5s ease-in-out;
  }
  .category {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 87vw;
    height: 300px;
    background-color: midnightblue;
    transform: scale(.9);
    transition: transform .5s ease-in-out;
  }
  </style>
<!-- FAIRE-PARTS TEMPLATE -->
  <section class="faire-parts">
    <div id="wrapper" style="transform: translateX(0);">
      <div class="category" data-name="mariage" style="transform: scale(1)">A</div>
      <div class="category" data-name="naissance">B</div>
      <div class="category" data-name="anniversaire">C</div>
    </div>
    <span class="subtitle"></span>
  </section>
`
// 2. ATTACH SHADOW ROOT TO CLASS _________________________ */
/**
 * <b>DESCR:</b><br>
 * My first custom Header made w/ web components
 */
export default class FaireParts extends HTMLElement {
  constructor() {
    super()
    // Create SHADOW DOM w/ mode 'open' means I can access it via the 'shadowRoot' property of the HTML element
    this.attachShadow({mode : 'open'})
    // Attach the 'template' as defined above in a const variable
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.faireParts = data.categories[0]
    this.wrapper = this.shadowRoot.getElementById("wrapper")
    this.subtitle = this.shadowRoot.querySelector(".subtitle")
    // 2 variables used in custom methods below need to be in global component's scope
    this.xDown = null
    this.swipeRight = null
  }
// CUSTOM METHODS
  printComponent() {
    this.subtitle.innerText = this.faireParts.subCategories[0].name
  }
  /**
   * <b>DESCR:</b>
   * Swipe Method 1/4
   * Stores X coordinates of user's first touch inside xDown variable
   * 
   * @method
   */
  // TOUCH START ____________________________________________ */
  touchStart() {
    this.wrapper.addEventListener('touchstart', (e) => {
      const firstTouch = e.touches[0]
      this.xDown = firstTouch.clientX
    }, false)
  }
  /**
   * <b>DESCR:</b>
   * Swipe Method 2/4
   * Detects if swipe movement occured and if it did,
   * detects wether movement occured to the left or to the right
   * 
   * @method
   * @returns {boolean} did user swipe right ?
   */
  // TOUCH MOVE _____________________________________________ */
  touchMove() {
    this.wrapper.addEventListener('touchmove', (e) => {
      if (!this.xDown) {
        return
      }
      let xUp = e.touches[0].clientX
      let xDiff = this.xDown - xUp                                                             
      if ( xDiff > 0 ) {
        this.swipeRight = true
        return this.swipeRight
      } else {
        this.swipeRight = false
        return this.swipeRight
      }
      this.xDown = null
    }, false)
  }
  /**
   * <b>DESCR:</b>
   * Swipe Method 3/4
   * Refactor mainSectionSwipe() by introducing 3 variables
   * called in each 'IF' scenario
   * 
   * @method
   * @param {string} vw translateX value in vw
   * @param {object} previousCat category moved away from viewport
   * @param {object} currentCat category moved inside viewport
   */
  // SWIPE LOGIC ____________________________________________ */
  swipeLogic(vw, previousCat, currentCat) {
    this.wrapper.style.setProperty('transform', `translateX(${vw})`)
    previousCat.style.setProperty('transform', 'scale(.9)')
    currentCat.style.setProperty('transform', 'scale(1)')
    this.subtitle.innerText = currentCat.dataset.name
  }
    /**
   * <b>DESCR:</b>
   * Swipe Method 4/4
   * Detects if user swips left or right & where is the viewport
   * when he does.
   * 
   * Moves the viewport & updates CSS class accordingly
   * 
   * @method
   */
  // MAIN SECTION SWIPE _____________________________________ */
  mainSectionSwipe() {
    this.wrapper.addEventListener('touchend', () => {
      let startingPoint = this.wrapper.style.getPropertyValue('transform')
      let [firstCategory, secondCategory, thirdCategory] = this.wrapper.getElementsByTagName("div")
      // 1-0-0 => 0-1-0
      if (this.swipeRight && startingPoint === 'translateX(0px)') {
        this.swipeLogic('-86vw', firstCategory, secondCategory)
      // 0-1-0 => 0-0-1
      } else if (this.swipeRight && startingPoint === 'translateX(-86vw)') {
        this.swipeLogic('-172vw', secondCategory, thirdCategory)
      // 0-1-0 <= 0-0-1
      } else if (!this.swipeRight && startingPoint === 'translateX(-172vw)') {
        this.swipeLogic('-86vw', thirdCategory, secondCategory)
      // 1-0-0 <= 0-1-0
      } else if (!this.swipeRight && startingPoint === 'translateX(-86vw)') {
        this.swipeLogic('0px', secondCategory, firstCategory)
      }
    }, false)
  }
// LIFECYCLE METHODS
  connectedCallback() {
    this.printComponent()
    this.touchStart()
    this.touchMove()
    this.mainSectionSwipe()
  }
  disconnectedCallback() {
    this.wrapper.removeEventListener()
  }
}
// 3. CREATE CUSTOM ELEMENT _______________________________ */
/**
 * Argument 1 = nom du custom element
 * Argument 2 = nom de la classe
 */ 
window.customElements.define('faire-parts-section', FaireParts)