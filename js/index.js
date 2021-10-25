// INDEX . JS = WHERE FRONT & BACK MEET

// 1. IMPORTS _____________________________________________ */
// Get FrontEnd
import Wrapper from '../mobile/components/wrapper.js'
// Get BackEnd
import {getData} from './fetcher.js'

// 2. DETECT IF DEVICE IS MOBILE __________________________ */
/**
 * <b>DESCR:</b><br>
 * Checks if device has a touchscreen AND viewport width smaller
 * than 500 pixels
 * 
 * @function
 * @returns {boolean} TRUE if the 2 parameters are valid
 */
 function deviceIsMobile() {
    let deviceParameters = {
        touchScreen: !!navigator.maxTouchPoints,
        width: window.innerWidth < 500 ? true : false
    }
    return Object.values(deviceParameters).every(Boolean)
}
// 3. INSTANTIATE ELEMENTS INSIDE THE PARENT DOM __________ */
/**
 * <b>DESCR:</b><br>
 * First function to be called once page is loaded.
 * Detects type of viewport (mobile / desktop) & prints
 * the web components accordingly.
 * 
 * @function
 */
(async function init() {
    // Get Data first
    window.data = await getData()
    // Then start modules
    const main = document.querySelector('body')

    if (deviceIsMobile()) {
        const wrapper = document.createElement('wrapper-m', Wrapper)

        wrapper.setAttribute('name', 'wrapper')
        main.appendChild(wrapper)
    } else {
        const msg = document.createElement('p')
        msg.innerText = 'NOT A MOBILE VIEWPORT'

        main.appendChild(msg)
    }
})()