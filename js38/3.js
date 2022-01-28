//key in object

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

let circle = new Circle(2);

for (let key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log(key, circle[key]);
    }
}

if ('radius' in circle) {
    console.log('Radius is in the circle.');
}

