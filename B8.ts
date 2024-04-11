class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get width(): number {
        return this._width;
    }

    set width(newWidth: number) {
        this._width = newWidth;
    }

    get height(): number {
        return this._height;
    }

    set height(newHeight: number) {
        this._height = newHeight;
    }

    rectangularArea(): number {
        return this._width * this._height;
    }

    rectangularPerimeter(): number {
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
