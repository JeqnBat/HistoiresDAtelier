"use strict";
// STAND ALONE SCRIPTS ____________________________________ */


// DEVICE IS MOBILE _______________________________________ */
/**
 * <b>DESCR:</b><br>
 * Checks if device has a touchscreen AND viewport width smaller
 * than 500 pixels
 * 
 * Returns true if these 2 conditions are met.
 * 
 * @returns {boolean}
 */
function deviceIsMobile() {
    let deviceParameters = {
        touchScreen: !!navigator.maxTouchPoints,
        width: window.innerWidth < 500 ? true : false
    }
    return Object.values(deviceParameters).every(Boolean)
}

export { deviceIsMobile }