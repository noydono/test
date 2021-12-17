import News from './domain/Product.js'
import {createNewsCard} from "./utils/dom/domFunction.js";

const form = document.querySelector('form');
const main = document.querySelector('main');
const body = document.querySelector('body');
const input = document.querySelector('#searcheInput');
const searchDeleteButton = document.querySelector('.action-button')
const burger = document.querySelector('.layout-header__mobile-action')
const sidenav = document.querySelector('.sidenav')
const closesidenav = document.querySelector('.action-close-sidenav')

window.onload = () => {
    input.value = ''
    for (let i = 0; i < 24; i++) {
        main.appendChild(createNewsCard(new News()))
    }
}

input.addEventListener('keydown', () => {
    if (input.value.length > 0) {
        searchDeleteButton.style.display = 'flex'
    } else {
        searchDeleteButton.style.display = 'none'
    }
})
input.addEventListener('keyup', () => {
    if (input.value.length === 0) {
        searchDeleteButton.style.display = 'none'
    } else {
        searchDeleteButton.style.display = 'flex'
    }
})

searchDeleteButton.addEventListener('click', () => {
    input.value = ''
})

burger.addEventListener('click', () => {
    sidenav.style.visibility = 'visible'
    sidenav.style.opacity = '1'

    burger.style.opacity = '0'
})
closesidenav.addEventListener('click', () => {
    sidenav.style.opacity = '0'
    burger.style.opacity = '1'
    setTimeout(() => {
        sidenav.style.visibility = 'hidden'
    }, 850)
})









