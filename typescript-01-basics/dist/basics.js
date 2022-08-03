"use strict";
/* ELSŐ feladat */
/*  Hozz létre egy Video classt title, uploader és seconds fieldekkel.
    Legyen egy watch metódusa is, ami kiírja a film címét és a perceket.
    Hozz létre két példányt a classból és hívd meg mindkettőnek a watch metódusát. */
class Video {
    constructor(title, uploader, seconds) {
        this._title = title;
        this._uploader = uploader;
        this._seconds = seconds;
    }
    watch() {
        return `title: ${this._title}, percek: ${Math.floor(this._seconds / 60)}`;
    }
}
const v1 = new Video('Pókember', 'Ferenc', 360);
const v2 = new Video('Pókember2', 'Ferenc2', 3453);
console.log(v1.watch());
console.log(v2.watch());
/* MÁSODIK feladat */
/*  Hozz létre egy Person classt, name és age fieldekkel.
    Legyen egy describe metódusa, ami visszaadja a fieldek értékét.
    Hozz létre két példányt, majd hívd meg mindkettőn a describe metódust. */
class Person {
}
/* HARMADIK feladat*/
/*  Hozz létre egy User interface-t, name, age és position (feltételes) fieldekkel.
    Hozz létre egy tömböt ami két user konkrét user objektumot tartalmaz,
    majd egy függvény segítségével írd ki a userek nevét és a korukat.  */
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
const users = [
    {
        name: "Réka",
        age: 25,
        role: Role.Admin
    },
    {
        name: "Gergő",
        age: 30,
        role: Role.User,
        position: 'developer'
    }
];
const printUserNameAndAge = (userArr) => {
    userArr.forEach(user => console.log(user.name, user.age));
};
printUserNameAndAge(users);
