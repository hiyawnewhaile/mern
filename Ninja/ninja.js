// Ninja

class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3
    };

    sayName(){
        console.log(`This Ninja's name is ${this.name}`)
    };

    showStats(){
        console.log(`This Ninja's name is ${this.name}, has a strength of ${this.strength}, speed of ${this.speed} and ${this.health} health.`)
    };

    drinkSake(){
        this.health += 10;
    };
};

class Sensei extends Ninja {
    constructor(name){
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdon = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Fall seven times, get up eight.")
    }
}



