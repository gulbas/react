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

function calculateArea() {
    let width = arguments[0];
    let height = arguments[1];
    let figure = arguments[2];
    let area = width * height;
    let obj = {
        area: area,
        figure: figure,
        input: [width, height]
    };
    document.write(`${obj.figure} area = ${obj.area}`);
    console.log(obj);
}

calculateArea(5, 2, 'square');