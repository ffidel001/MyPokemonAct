// console.log("Hello Wolrd");

/*
// trainer objects
function Trainer(name, gender) {
    this.name = name;
    this.gender = gender;
}

let Giovanni = {
    name: "Giovanni",
    gender: "Male"
}

let Red = {
    name: "Red",
    gender: "Male"
}

// Pokemon Mechanics
function Pokemon(name, level, health, attack, exp) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = attack;
    this.exp = exp;

    this.FlareBlitz = function(target) {
        console.log(this.name + " used Flare Blitz");
        if (target.health - this.attack <= 0) {
            console.log(`${target.name} fainted`);
            this.exp += 100;
        } else {
            console.log(`\n$(this.name) leveld up to ${this.level + 1}.`);
        }
    }

    this.FireFang = function(target) {
        console.log(this.name + " used Fire Fang");
        if (target.health - this.attack <= 0) {
            console.log(`${target.name} fainted`);
            this.exp += 100;
        } else {
            console.log(`\n$(this.name) leveld up to ${this.level + 1}.`);
        }
    }

    this.Crunch = function(target) {
        console.log(this.name + " used Crunch");
        if (target.health - this.attack <= 0) {
            console.log(`${target.name} fainted`);
            this.exp += 100;
        } else {
            console.log(`\n$(this.name) leveld up to ${this.level + 1}.`);
        }
    }

}

let Mightyena = new Pokemon("Mightyena", 50, 70, 85, 0);
let Charizard = new Pokemon("Charizard", 50, 78, 105, 0);

Charizard.FlareBlitz(Mightyena);
Mightyena.Crunch(Charizard);
*/


// Define a Trainer class to represent trainers
class Trainer {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

// Define Trainer instances
const red = new Trainer("Red", "Male");
const giovanni = new Trainer("Giovanni", "Male");

// Define a Pokemon class to represent Pokemon
class Pokemon {
    constructor(name, level, health, attack, exp) {
        this.name = name;
        this.level = level;
        this.baseHealth = health;
        this.health = 2 * health;
        this.attack = attack;
        this.exp = exp;
        this.isFainted = false;
    }

    // Define a method for Pokemon to attack another Pokemon
    attackOpponent(target, moveName) {
        if (!this.isFainted) {
            console.log(`${this.name} used ${moveName}`);
            const damageDealt = Math.min(target.health, this.attack);
            target.health -= damageDealt;
            if (target.health <= 0) {
                console.log(`${target.name} fainted`);
                target.isFainted = true;
                this.levelUp();
            } else {
                console.log(`${this.name} did ${damageDealt} damage to ${target.name}`);
            }
        }
    }

    // Define a method for Pokemon to level up
    levelUp() {
        this.level++;
        console.log(`${this.name} leveled up to ${this.level}`);
    }
}

// Create instances of Pokemon
const charizard = new Pokemon("Charizard", 50, 112, 90, 0);
const persian = new Pokemon("Persian", 50, 113, 85, 0);

// Battle
console.log(`${red.name} battled ${giovanni.name}`);
console.log(`${red.name} chose ${charizard.name}`);
console.log(`${giovanni.name} chose ${persian.name}`);

// Continuously attack each other until one faints
while (!charizard.isFainted && !persian.isFainted) {
    charizard.attackOpponent(persian, "Flare Blitz");
    if (!persian.isFainted) {
        persian.attackOpponent(charizard, "Scratch");
    }
}

// Display the winner of the battle
if (charizard.isFainted) {
    console.log(`${giovanni.name}'s ${persian.name} wins!`);
} else {
    console.log(`${red.name}'s ${charizard.name} wins!`);
}
