"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
class Unit {
    constructor(hp, dmg, armor) {
        this._hp = hp;
        this._dmg = dmg;
        this._armor = armor;
    }
    isOut() {
        return this._hp > 25 ? false : true;
    }
    doDamage() {
        return this._dmg;
    }
    sufferDamage(damage) {
        if (this._armor) {
            this._hp -= Math.round(damage / 2);
        }
        else {
            this._hp -= damage;
        }
    }
}
exports.Unit = Unit;
