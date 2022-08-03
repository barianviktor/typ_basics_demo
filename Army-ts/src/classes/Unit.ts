export abstract class Unit {
  protected _hp: number;
  protected _dmg: number;
  protected _armor: boolean;
  constructor(hp: number, dmg: number, armor: boolean) {
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
  sufferDamage(damage: number) {
    if (this._armor) {
      this._hp -= Math.round(damage / 2);
    } else {
      this._hp -= damage;
    }
  }
}
