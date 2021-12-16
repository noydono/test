import News from './domain/News.js'
import {createNewsCard} from "./utils/dom/domFunction.js";

const form = document.querySelector('form');
const main = document.querySelector('main');

for (let i = 0; i < 20;i++){
    main.appendChild(createNewsCard(new News()))
}



