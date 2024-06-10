//USE of "static" keyword (here not completed)#####################################

class User{
    constructor(username){
        this.username=username;
    }
    myName(){
        console.log(`My name is ${this.username}`);
    }
    static myId(){
        return `123`;
    }
}

const u1=new User("Gagan Sahu");
u1.myName();
// console.log(u1.myId());


class child extends User{
    constructor(username,password){
        super(username);
    this.password=password;
    }
}


const c1=new child("Lipi sahu");
c1.myName();
// c1.myId();
