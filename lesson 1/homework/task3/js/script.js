"use strict";

/*
3. Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников
(разработчиков), а также методы по удалению/добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для
изменения менеджера (имеется ввиду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число),
dateOfBirth (строка или дата)
У класса Employee должны присутствовать параметры: salary (число), department
(строка)
В классе Human должен присутствовать метод displayInfo, который возвращает строку
со всеми параметрами экземпляра Human.

В классе Employee должен быть реализовать такой же метод (displayInfo), который
вызывает базовый метод и дополняет его параметрами из экземпляра Employee
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo
класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс
Human и вернет строку с параметрами Human'a.
*/

class Human {
    /**
     * Create Human.
     * @param {string} name - Name.
     * @param {number} age - Age.
     * @param {string|object} dateOfBirth - Date of Birthday.
     */
    constructor(name, age, dateOfBirth) {

        if (typeof name === 'string') {
            this.name = name;
        } else {
            console.error('Имя не передано или не является строкой');
        }

        if (typeof age === 'number') {
            this.age = age;
        } else {
            console.error('Возраст не передан или не является числом');
        }

        if (typeof dateOfBirth === 'string' || dateOfBirth instanceof Date) {
            this.dateOfBirth = dateOfBirth;
        } else {
            console.error('Дата рождения дожна быть либо строкой, либо датой');
        }
    }

    displayInfo() {
        console.log(`${Object.getOwnPropertyNames(this)}`);
    }

}

class Employee extends Human {
    /**
     * Create Employee.
     * @param {string} name - Name human.
     * @param {number} age - Age.
     * @param {string|object} dateOfBirth - Date of Birthday.
     * @param {number} salary - Salary.
     * @param {string} department - Department name.
     */
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);

        if (typeof salary === 'number') {
            this.salary = salary;
        } else {
            console.error('Оклад должен быть числом');
        }

        if (typeof department === 'string') {
            this.department = department;
        } else {
            console.error('Отдел должен быть строкой');
        }

    }

    displayInfo() {
        super.displayInfo();
    }

}

class Developer extends Employee {
    /**
     * Create Developer.
     * @param {string} name - Name human.
     * @param {number} age - Age.
     * @param {string|object} dateOfBirth - Date of Birthday.
     * @param {number} salary - Salary.
     * @param {string} department - Department name.
     * @param {object} manager
     */
    constructor(name, age, dateOfBirth, salary, department, manager) {
        super(name, age, dateOfBirth, salary, department);
        if (manager instanceof Manager) {
            this.manager = manager;
        }
    }

    changeManager(manager) {
        if (manager instanceof Manager) {
            this.manager = manager;
        } else {
            console.error('менеджер не является экземпляром класса Manager')
        }
    }
}

class Manager extends Employee {
    /**
     * Create Manager.
     * @param {string} name - Name human.
     * @param {number} age - Age.
     * @param {string|object} dateOfBirth - Date of Birthday.
     * @param {number} salary - Salary.
     * @param {string} department - Department name.
     */
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.arrayDevelopers = [];
    }

    addDeveloper(developer) {
        if (developer instanceof Developer && !this.arrayDevelopers.some((value) => value === developer)) {
            this.arrayDevelopers.push(developer);
        }
    }

    delDeveloper(developer) {
        if (developer instanceof Developer && !this.arrayDevelopers.some((value) => value === developer)) {
            const index = this.arrayDevelopers.indexOf(developer);
            this.arrayDevelopers.splice(index, 1);
        }
    }
}