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