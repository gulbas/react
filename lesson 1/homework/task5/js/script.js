"use strict";

/*
5. *Написать цикл, который создает массив промисов. Внутри каждого промиса происходит обращение
к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10.
В итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив
загруженных данных.
*/

class User {
    constructor() {
        this.url = `https://jsonplaceholder.typicode.com/users`;
        this.arrayPromise = [];
    }

    getArrayPromise() {
        this.arrayPromise = Array(10).fill(0);

        return this.arrayPromise.map((item, idx) => fetch(`${this.url}/${idx + 1}`)
            .then((res) => {
                if (res.status === 200) {
                    return res;
                }
                throw new Error(res.statusText);
            })
            .then(res => res.json()));
    }

    init() {
        Promise.all(this.getArrayPromise())
            .then(data => console.log(data))
            .catch((e) => console.error(e));
    }
}

let go = new User();
go.init();
