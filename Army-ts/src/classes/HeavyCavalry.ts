import { Unit } from "./Unit";

export class HeavyCavalry extends Unit {
  private _firstStrike: boolean;
  constructor() {
    super(150, 20, true);
    this._firstStrike = true;
  }
  doDamage(): number {
    let damage = this._dmg;
    if (this._firstStrike) {
      damage = damage * 3;
      this._firstStrike = false;
    }
    return damage;
  }
}
