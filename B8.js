"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(newWidth) {
        this._width = newWidth;
    }
    get height() {
        return this._height;
    }
    set height(newHeight) {
        this._height = newHeight;
    }
    rectangularArea() {
        return this._width * this._height;
    }
    rectangularPerimeter() {
        return 2 * (this._width + this._height);
    }
}
let rectangle = new Rectangle(5, 7);
console.log("Rộng", rectangle.width);
console.log("Cao", rectangle.height);
console.log("Điện tích", rectangle.rectangularArea());
console.log("Chu vi", rectangle.rectangularPerimeter());
rectangle.width = 8;
rectangle.height = 10;
console.log("Rộng mới", rectangle.width);
console.log("Cao mới", rectangle.height);
console.log("Diện tích mới", rectangle.rectangularArea());
console.log("Chu vi mới", rectangle.rectangularPerimeter());
