import { Unit } from "./Unit";

export class Swordsman extends Unit {
  constructor() {
    super(100, 10, true);
  }
  sufferDamage(damage: number): void {
    if (this._armor) {
      this._armor = false;
    } else {
      this._hp -= damage;
    }
  }
}
