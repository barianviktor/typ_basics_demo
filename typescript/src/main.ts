import {Person} from "./person"

let p1:Person = new Person('Jani', 26)
console.log(p1.getName(), p1.getAge())

class User {
    public username:string
    private _email:string 
    private _password:string
    public static ip_address:string = '192.168.1.1'

    constructor(username:string, email:string, password:string){
        this.username = username
        this._email = email
        this._password = password
    }
}
const u1 = new User('Lajos','alajos@gmail.com', 'asdasd')

