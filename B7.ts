class Circle {
    private _radius: number;
    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(newRadius: number) {
        this._radius = newRadius;
    }

    acreageRadius(): number {
        return Math.PI * this._radius ** 2;
    }

    circleRadius(): number {
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
