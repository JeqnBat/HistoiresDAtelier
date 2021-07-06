// IMPORTATOR _____________________________________________ */
import Wrapper from './mobile/components/wrapper.js'
import { deviceIsMobile } from './scripts.js'

// INSTANTIATE ELEMENTS INSIDE THE PARENT DOM _____________ */
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


