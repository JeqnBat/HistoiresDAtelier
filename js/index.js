// IMPORTATOR _____________________________________________ */
import Wrapper from './mobile/components/wrapper.js'

// DETECT IF DEVICE IS MOBILE _____________________________ */
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

// INSTANTIATE ELEMENTS INSIDE THE PARENT DOM _____________ */
/**
 * <b>DESCR:</b><br>
 * First function to be called once page is loaded.
 * Detects type of viewport (mobile / desktop) & prints
 * the web components accordingly.
 * 
 * @function
 */
function init() {
    const main = document.querySelector('main')
    if (deviceIsMobile()) {
        const wrapper = document.createElement('wrapper-m')
        const main = document.querySelector('main')

        wrapper.setAttribute('name', 'wrapper')
        main.appendChild(wrapper)
    } else {
        const msg = document.createElement('p')
        msg.innerText = 'NOT A MOBILE VIEWPORT'

        main.appendChild(msg)
    }
}

// CALL INIT ______________________________________________ */
init()


