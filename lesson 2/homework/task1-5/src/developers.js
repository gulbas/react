"use strict";

export default class Developers {
    constructor(name, firstName, nickName, url) {
        this.name = name;
        this.firstName = firstName;
        this.nickName = nickName;
        this.url = url;
    }

    render() {
        let div = document.getElementById('developer');
        let html = `Developers: ${this.name}`;
        html += ` ${this.firstName}`;
        html += ` <a href="${this.url}">${this.nickName}</a>`;
        div.innerHTML = html;
    }
}