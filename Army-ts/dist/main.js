"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archer_1 = require("./classes/Archer");
const HeavyCavalry_1 = require("./classes/HeavyCavalry");
const Swordsman_1 = require("./classes/Swordsman");
console.log("asd");
class Army {
    constructor() {
        this._army = [];
    }
    addUnit(unit) {
        this._army.push(unit);
    }
    getArmySize() {
        return this._army.length;
    }
    damageAll(damage) {
        let removable = [];
        for (let i = 0; i < this._army.length; i++) {
            this._army[i].sufferDamage(damage);
            if (this._army[i].isOut()) {
                removable.push(i);
            }
        }
        for (let i = 0; i < removable.length; i++) {
            console.log(this._army[removable[i] - i]);
            this._army.splice(removable[i] - i, 1);
        }
    }
    getArmyDamage() {
        let damageSum = 0;
        this._army.forEach((unit) => {
            damageSum += unit.doDamage();
        });
        return damageSum;
    }
}
let a1 = new Army();
for (let i = 0; i < 30; i++) {
    if (i % 2 == 0)
        a1.addUnit(new Archer_1.Archer());
    if (i % 3 == 0)
        a1.addUnit(new HeavyCavalry_1.HeavyCavalry());
    a1.addUnit(new Swordsman_1.Swordsman());
}
console.log(a1.getArmyDamage());
console.log("asd");
console.log(a1.getArmyDamage());
console.log(a1.getArmyDamage());
console.log(a1);
console.log(a1.getArmySize());
a1.damageAll(40);
console.log(a1);
console.log(a1.getArmySize());
