"use strict";

/*
2. Написать функцию calculateArea, которая будет принимать параметры, для
вычисления площади (можете выбрать какую то конкретную фигуру, а можете,
основываясь на переданных параметрах, выполнять требуемый алгоритм
вычисления площади для переданной в параметрах фигуры) и возвращать объект
вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры,
для которой вычислялась площадь, input - входные параметры, по которым было
произведено вычисление.

*/

/**
 * Определение площади фигур: квадрат, треугольник, прямоугольник
 * @param {string} figure - Фигура
 * @param {...number} param - Параметры
 */
function calculateArea(figure, ...param) {
    let result = document.getElementById('result');
    let obj;
    let area;
    let a = param[0];
    let b = param[1];
    let h = param[2];
    if (figure === 'square') {
        area = Math.pow(a, a);
    } else if (figure === 'triangle') {
        area = 1 / 2 * a * h;
    } else if (figure === 'rectangle') {
        area = a * b;
    }

    obj = {
        area: area,
        figure: figure,
        input: []
    };
    for (let i = 0; i < param.length; i++) obj.input.push(param[i]);

    // Визуализация
    result.innerHTML = '';
    result.innerHTML = `${obj.figure} area = ${obj.area}`;

    return console.log(obj);
}

let select = document.getElementById('select');
let button = document.getElementById('button');

/**
 * Функция с набором данных в зависимости от фигуры
 */
button.addEventListener('click', () => {
    if (select.value === 'square') {
        calculateArea('square', 4)
    } else if (select.value === 'rectangle') {
        calculateArea('rectangle', 4, 2)
    } else if (select.value === 'triangle') {
        calculateArea('triangle', 4, 2, 1)
    }
});
