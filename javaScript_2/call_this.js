function setname(username){
 this.username=username;
}

function setData(username,email,pass){
    setname.call(this,username);
    this.email=email;
    this.pass=pass;
    
}

const user=new setData("Trupti","trupti@gmail.com",23456);
console.log(user);