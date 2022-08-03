// abstract class Animal{
//     weight:number ;
//     constructor(weight:number){
//         this.weight = weight
//     }
// }

// class Tiger extends Animal{
//     constructor(weigth:number){
//         super(weigth)
//     }
// }

// const t1:Tiger = new Tiger(30)

import {PersonInterface} from "./person.interface"

export class Person implements PersonInterface{
    name:string
    age:number
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
    getName():string{
        return this.name
    }
    getAge():number{
        return this.age
    }
}

