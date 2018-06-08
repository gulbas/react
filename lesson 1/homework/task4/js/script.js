"use strict";

/*
4. *При помощи генератора написать функцию-анкету, которая запрашивает у пользователя на ввод параметры и передает их в
генератор. В конце, когда генератор завершается, он должен вернуть все введенные входные параметры в виде объекта.
Этот объект нужно вывести в консоли.
*/

/**
 * Generator
 * @returns {IterableIterator<*>}
 */
function* generateSequence() {
    // let user = {}, name, age, dateOfBirth, salary;
    yield  prompt('Введите имя');
    // yield user.name = name;
    yield parseInt(prompt('Введите возраст'));
    // yield user.age = age;
    yield  prompt('Введите дату рождения');
    // yield user.birthDay = dateOfBirth;
    yield parseInt(prompt('Введите желаемую зарплату'));
    // yield user.salary = salary;

}

function result() {
    let user = {};
    let generator = generateSequence();
    let bbb = ['name', 'age', 'dateOfBirth', 'salary'];
    // console.log(generator);
    for(let value of generator) {
        value;
        // console.log(value)
        bbb.forEach((element) => { user.element = value});
    }
    console.log(user);
}

result();