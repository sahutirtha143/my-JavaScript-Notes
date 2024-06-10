//OBJECT LITERALS ####################################################################
   const user={
    uname:"SBS Sahu",
    pass:123,
    getAllData:function(){
        // console.log("Here all data avilable ");
        // console.log(`username is: ${this.uname}`);
        // console.log(this);
    }
   }

//    console.log(user);
//    console.log(user.uname);
// console.log(user.getAllData());
// console.log(this);

//Constructor function #################################################################################
function myUser(uname,upass,islogin){
    this.uname=uname;
    this.upass=upass;
    this.islogin=islogin;

    return this;
}

const u1=new myUser("SBS",123,true);
const u2=new myUser("Sabitri",157,false);
// console.log(u1);
// console.log(u1.uname);

console.log(u2);
console.log(u2.constructor); //.constructor property give data about yourself
console.log(u2.uname);
