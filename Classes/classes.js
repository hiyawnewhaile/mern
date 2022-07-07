// CLASSES AND OOP

// What are some of the basic elements of a class
// The name of the class
// All classes have a constructor
// Attributes that go into the constructor
// Classses have methods that allow us to perform actions

class Character {
    constructor(name, health, strength, intellegence){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.intellegence = intellegence;
    }

    attack(target){
        target.health -= this.strength;
        console.log(`${this.name} attacked ${target.name}, dealing ${this.strength} damage!`);
        console.log(`${target.name} now has ${target.health} HP.`)
    }
}

// Introducing Inheritance
class MagicUser extends Character {
    constructor(name, health, strength, intellegence, mana){
        super(name, health, strength, intellegence);
        this.mana = mana;
    }

    attack(target){
        target.health -= this.intellegence;
        this.mana -= 8;
        console.log(`${this.name} fires a spell ${target.name}, dealing ${this.intellegence} damage!`);
        console.log(`${target.name} now has ${target.health} HP.`)
    }
}

const Char1 = new Character("Link", 10, 8, 6);
const Char2 = new Character("Ganandorf", 50, 12,14);
// console.log(Char1.name)
Char1.attack(Char2);
Char2.attack(Char1);

const char3 = new MagicUser("Zelda", 20, 7, 15, 50);

char3.attack(Char2);