import News from './domain/Product.js'
import {createNewsCard} from "./utils/dom/domFunction.js";

const form = document.querySelector('form');
const main = document.querySelector('main');
const input = document.querySelector('#searcheInput');
const searchDeleteButton = document.querySelector('.action-button');

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







