// IMPORTATOR _____________________________________________ */
import Wrapper from './mobile/components/wrapper.js'

// INSTANTIATE ELEMENTS INSIDE THE PARENT DOM _____________ */
const wrapper = document.createElement('wrapper-m')
const main = document.querySelector('main')

wrapper.setAttribute('name', 'wrapper')
main.appendChild(wrapper)

const footer = document.createElement('footer-m')
document.querySelector('footer').appendChild(footer)
