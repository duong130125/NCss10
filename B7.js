"use strict";
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(newRadius) {
        this._radius = newRadius;
    }
    acreageRadius() {
        return Math.PI * this._radius ** 2;
    }
    circleRadius() {
        return 2 * Math.PI * this._radius;
    }
}
let circle = new Circle(5);
console.log("Radius:", circle.radius);
console.log("Circumference:", circle.acreageRadius());
console.log("Area:", circle.circleRadius());
circle.radius = 7;
console.log("Radius mới:", circle.radius);
console.log("Mới", circle.acreageRadius());
console.log("Mới", circle.circleRadius());
