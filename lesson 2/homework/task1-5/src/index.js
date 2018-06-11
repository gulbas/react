import User from './user';
import Developer from './developers';
import Datetime from './date';

const user = new User('Vasya', 'Pupkin');
user.sayHi();


const developer = new Developer('Vladilen','Ustinov',`nbsp;`,'https://github.com/gulbas');
developer.render();

const date = new Datetime();
date.render();



console.log('Hello world');