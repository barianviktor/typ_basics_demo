"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swordsman = void 0;
const Unit_1 = require("./Unit");
class Swordsman extends Unit_1.Unit {
    constructor() {
        super(100, 10, true);
    }
    sufferDamage(damage) {
        if (this._armor) {
            this._armor = false;
        }
        else {
            this._hp -= damage;
        }
    }
}
exports.Swordsman = Swordsman;
