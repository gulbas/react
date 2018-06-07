"use strict";

/*
4. *При помощи генератора написать функцию-анкету, которая запрашивает у пользователя на ввод параметры и передает их в
генератор. В конце, когда генератор завершается, он должен вернуть все введенные входные параметры в виде объекта.
Этот объект нужно вывести в консоли.
*/

function* generateSequence() {
    let user = {}, name, age, dateOfBirth, salary;
    yield name = prompt('Введите имя');
    yield user.name = name;
    yield age = prompt('Введите возраст');
    yield user.age = age;
    yield dateOfBirth = prompt('Введите дату рождения');
    yield user.birthDay = dateOfBirth;
    yield salary = prompt('Введите желаемую зарплату');
    yield user.salary = salary;
    return console.log(user);
}

function result() {
    let generator = generateSequence();
    for(let value of generator) value;
}

result();