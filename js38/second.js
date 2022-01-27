//Factory function
function createCircle(radius) {
    return {
        radius,
        surfaceArea: radius**2*3.14,
        surface: function surface() {
            console.log(this.radius + 'm : ' + this.surfaceArea);
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
    this.surfaceArea = radius**2*3.14;
    this.surface2 = function(){
        console.log('Surface of ' + this.radius + 'm radius circle = ' + this.surfaceArea);
    };
}
const another = new Circle(3);
another.surface2();