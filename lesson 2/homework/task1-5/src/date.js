"use strict";

export default class Datetime {
    constructor(){
        this.date = new Date();
    }

    render() {
        let div = document.getElementById('date');
        div.innerHTML = `<a href="#">Click me</a>`;
        div.addEventListener('click', () => alert(`${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`));
    }
}