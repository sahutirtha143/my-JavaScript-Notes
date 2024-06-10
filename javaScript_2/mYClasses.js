
//Use of "class" keyword########################################
class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    passwordEncypt(){
        return `${this.password}xyz`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const rudra=new User("Tusar Sahu","tusar@gmail.com",123);

// console.log(rudra.passwordEncypt());
// console.log(rudra.changeUsername());

// behind this

function Users(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

Users.prototype.passwordEncypt=function(){
    return `${this.password}xyz`;
}

Users.prototype. changeUsername=function(){
    return `${this.username.toUpperCase()}`;
}

const adi=new Users("Sai Aditya Sahu","adi@gmail.com",9777);
console.log(adi.passwordEncypt());
console.log(adi.changeUsername());