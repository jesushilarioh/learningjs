class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area);

/* Helpful Resources
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
