"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeavyCavalry = void 0;
const Unit_1 = require("./Unit");
class HeavyCavalry extends Unit_1.Unit {
    constructor() {
        super(150, 20, true);
        this._firstStrike = true;
    }
    doDamage() {
        let damage = this._dmg;
        if (this._firstStrike) {
            damage = damage * 3;
            this._firstStrike = false;
        }
        return damage;
    }
}
exports.HeavyCavalry = HeavyCavalry;
