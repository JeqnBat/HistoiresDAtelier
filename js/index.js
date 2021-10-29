// INDEX . JS = WHERE FRONT & BACK MEET

// 1. IMPORTS _____________________________________________ */
// Get FrontEnd
import Wrapper from '../mobile/components/g_wrapper.js'
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
    // Store pageName in window so it is accessible everywhere by other modules
    window.pageName = document.querySelector('html').dataset.pageName
    // Then start modules
    const main = document.querySelector('body')

    if (deviceIsMobile()) {
        const pageBuilder = document.createElement('page-wrapper', Wrapper)
        main.appendChild(pageBuilder)
    } else {
        const msg = document.createElement('p')
        msg.innerText = 'NOT A MOBILE VIEWPORT'
        main.appendChild(msg)
    }
})()