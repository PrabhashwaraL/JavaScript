//--- with one parameter ---
// Regular function
const calcPerimeter = function (radius) {
    return 2 * 3.14 * radius;
};

// Arrow function
const calcArea = radius => 3.14 * radius ** 2;

const perimeter = calcPerimeter(7);
const area = calcArea(7);
console.log('Perimeter of the circle: ' + perimeter);
console.log('Area of the circle: ' + area);

//--- with no parameters ---
const greet = function () {
    return 'Hello, World';
};

const greet2 = () => 'Hello, World';

console.log(greet());
console.log(greet2());

//--- with two parameters and calculation ---
const bill = function (products, tax) {
    let total = 0;
    for(let i = 0; i<products.length; ++i) {
        total += products[i] + products[i]*tax;
    }
    return total;
};

const bill2 = (product, tax) => {
    let total = 0;
    for(let i = 0; i<product.length; ++i) {
        total += product[i] + product[i]*tax;
    }
    return total;
};

console.log(bill([100, 98, 94], 0.08));
console.log(bill2([100, 98, 94], 0.08));