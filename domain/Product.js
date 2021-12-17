import {getRandomNumber} from "../utils/function.js";
const faker = window.faker

export default class {
    _id
    _price;
    title;
    description;
    imageUrl;

    constructor(title, description, imageUrl) {
        this._id = getRandomNumber(1,10000)
        this.title = faker.commerce.productName();
        this.description = faker.commerce.product();
        this._price = faker.commerce.price();
        this.imageUrl = 'https://picsum.photos/200/300';
        this._title = title;
        this._description = description;
        this._imageUrl = imageUrl;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(value) {
        this._imageUrl = value;
    }
}
