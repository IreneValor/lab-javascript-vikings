// Soldier
class Soldier {

    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
constructor(nameValue, healthValue, strengthValue) {
    super(healthValue, strengthValue);
    this.name = nameValue;
}

receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
    return `${this.name} has received ${damage} points of damage`;
    } else {
    return `${this.name} has died in act of combat`;
    }
}
    battleCry() {
    return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthValue, strengthValue) {
    super(healthValue, strengthValue);
    }
    receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
    } else {
    return `A Saxon has died in combat`;
    }
    }
}


// War
class War {
constructor(vikingArmyValue = [], saxonArmyValue = []) {
    this.vikingArmy = vikingArmyValue;
    this.saxonArmy = saxonArmyValue;
}
addViking(Viking) {
    this.vikingArmy.push(Viking);
}
addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
}
vikingAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const attack = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(randomSaxon);
    }
    return attack;
}
saxonAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const attack = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomViking);
    }
    return attack;
}
showStatus() {
    if (!this.vikingArmy.length) {
    return "Saxons have fought for their lives and survived another day...";
    } else if (!this.saxonArmy.length) {
    return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
    return "Vikings and Saxons are still in the thick of battle.";
    }
}
}
