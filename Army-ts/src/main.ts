import { Archer } from "./classes/Archer";
import { HeavyCavalry } from "./classes/HeavyCavalry";
import { Swordsman } from "./classes/Swordsman";
import { Unit } from "./classes/Unit";
/*comment */
console.log("asd");
class Army {
  private _army: Unit[];
  constructor() {
    this._army = [];
  }
  addUnit(unit: Unit): void {
    this._army.push(unit);
  }
  getArmySize(): number {
    return this._army.length;
  }
  damageAll(damage: number) {
    let removable: number[] = [];
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
  getArmyDamage(): number {
    let damageSum = 0;

    this._army.forEach((unit) => {
      damageSum += unit.doDamage();
    });

    return damageSum;
  }
}

let a1: Army = new Army();
for (let i = 0; i < 30; i++) {
  if (i % 2 == 0) a1.addUnit(new Archer());
  if (i % 3 == 0) a1.addUnit(new HeavyCavalry());
  a1.addUnit(new Swordsman());
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
