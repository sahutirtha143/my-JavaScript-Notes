//USE of "inheritance" ####################################

class User{
    constructor(username){
        this.username=username;
    }
    myUsername(){
        console.log(`username is ${this.username}`);
    }
}

class brother extends User{
    constructor(username,gmail,password){
        super(username);
        this.gmail=gmail;
        this.password=password;
    }

    datials(){
        console.log(`My brother name is ${this.username}, his email is ${this.gmail} and passwod is ${this.password}`);
    }
}

const bro=new brother("Sai Anurag Sahu","anurag@gmail.com","anurag@143");
// bro.datials();

const bros=new User("Sai Anurag Sahu");
// bros.myUsername();

console.log(bro instanceof User);
console.log(bros instanceof User);
console.log(brother instanceof User);
console.log(bros instanceof brother);