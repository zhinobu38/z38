const circle = {
    radius: 1.0,
    location:{
        x:1,
        y:1
    },
    surface: function() {
        console.log('Surface of ' + circle.radius + 'm radius circle = ' + (circle.radius*3.14));
    }
}

circle.surface();