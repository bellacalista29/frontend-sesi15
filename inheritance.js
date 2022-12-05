class Animal {
    constructor(legs)
    {
        this.legs = legs;
    }
    walk()
    {
        console.log('Walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs + 1);
    }
    fly() {
        console.log('flying');
    }
}

let bird = new Bird(2);

bird.walk();
bird.fly();