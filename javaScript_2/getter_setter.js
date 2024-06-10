
//GETTER AND SETTER METHOD

class user{
    constructor(name ,pass){
        this.name=name;
        this.pass=pass;
    }
    get pass(){
        return this._pass;
    }
    set pass(value){
        this._pass=value;
    }
}

const u1=new user("jyoti",523);
console.log(u1.name);
console.log(u1.pass);