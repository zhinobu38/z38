//Getter & Setter
//private properties : convert closure to private property

function Person(name) {
    
    this.name = name;
    let defaultLocation = { x: 1, y: 2 };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x | !value.y)
                throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });
}

let position = new Person('Ake');
console.log(position.defaultLocation);