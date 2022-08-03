"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
const Unit_1 = require("./Unit");
class Archer extends Unit_1.Unit {
    constructor() {
        super(50, 20, false);
    }
}
exports.Archer = Archer;
