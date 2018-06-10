"use strict";

/*
1. Написать функцию loop, которая будет принимать параметры: times (значение по
умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз),
вызывать функцию callback. Если функцию не передана, то цикл не должен
отрабатывать ни разу. Покажите применение этой функции
*/

/**
 * Функция которая принимает параметр times и в цикле вызывает функцию callback
 * @callback loopCallback
 *
 * @param {number} times - Количество итераций
 * @param {loopCallback} callback - Обратный вызов, который обрабатывает одну итерацию.
 */
function loop(times = 0, callback = null) {
    if ((typeof callback) === 'function') {
        for (let i = 0; i < times; i++) {
            callback();
        }
    }
}

loop(5, () => console.log('Привет'));
