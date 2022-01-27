//Factory function
function createCircle(radius) {
    return {
        radius,
        surface: function surface() {
            console.log('Surface of ' + radius + 'm radius circle = ' + (radius*3.14));
        }
    }
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
circle1.surface();
circle2.surface();

//Constructor
function Circle(radius) {
    this.radius = radius;
    this.surface = function(){
        console.log('Surface of ' + this.radius + 'm radius circle = ' + (this.radius*3.14));
    };
}
const another = new Circle(3);
another.surface();