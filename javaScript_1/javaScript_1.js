//01_DATA TYPES*************************************

const accId=1234;
let accoId=2345;
var userId=3456;
accountCity="hydrabad"
let accountState;

// accId=1;

// accoId=098;
userId="wer";
accountCity="bengalur";

// console.log(accId);
// console.log(accoId);
// console.log(userId); 
// console.log(accountCity);

// console.table([accId,accoId,userId,accountCity,accountState]);

/*
Prefer to donot use var keyword
because some issue in the block scope and functional scope
*/


//02_Datatypes and ECMA standards**************************

"use strict"; //treated as a new version of JS code

//number
//bigInt
//string
//boolean
//null=stand alone value
//undefined
//symblo=>unique

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
console.log(NaN===NaN);

//03_Datatyope conversion confusion***************************

let score=33
// let score="hitesh"
// console.log(typeof(score));
let valueInNum=Number(score);
// console.log(typeof(valueInNum));
// console.log(valueInNum);

// "33"=>33
// "33asd"=>NaN
// "Undefined"=> NaN
// "true"=>1; "false"=>0
//"null"=>0

let num=33;
// console.log(typeof(num));
let numInStirng=String(num);
// console.log(typeof(numInStirng));
// console.log(numInStirng);


//04_ Why string to number******************************************

// console.log(3+3);

// console.log("3"+3);
// console.log(3+"3");
// console.log("3"+"3");

// console.log("3"+3+3+3+3);
// console.log(3+3+3+3+"3");

// console.log(3+ +3);
// console.log(3+ +"3");
// console.log("3"+ +3);
// console.log("3"+ +"3");

//05_ comparison of datatypes******************************************

// console.log(null>0);
// console.log(null==0);
// console.log(null===0);
// console.log(null>=0);

// console.log("2"==2);
// console.log("2"===2); //STRICT CHECK

//06_datatypes summary**********************************************************************************

// PREMITIVE DATATYPE:
// 7 TYPES:String,Number,Boolean,null,undefined,Symbol,BigInt

let name="asd";
// console.log(typeof name);

let name1=19;
// console.log(typeof name1);

let name2=true;
// console.log(typeof name2);

let name3=null;
// console.log(typeof name3);

let name4=undefined;
// console.log(typeof name4);

let name5=Symbol('123');
let name6=Symbol('123');
// console.log(typeof name5);
// console.log(name5===name6);

// NON-PREMITIVE:
// Array,Object,Function

let names=["ram","laxman","sita"];
// console.log(typeof names);
// console.log(names);

let objNames={
    name:"ram",
    age:21,
    gender:"male"

}
// console.log(objNames);
// console.log(typeof objNames);

let myFun=function(){
    
}

// console.log(typeof myFun);


//07_stack and heap memory*********************************************************************

// STACK(PREMITIVE DATATYPES)
let abc="Sabitri"
// console.log(abc);

let bc=abc;
bc="subhadra"
// console.log(bc);


//HEAP(NON-PREMITIVE DATATYPES)
let user1={
    email:"sahu@gmail.com",
    uid:"123"
}
// console.log(user1);

let user2=user1;
// console.log(user2);
user2.email="sabitri@gmail.com"
// console.log(user2.email);
// console.log(user2);
// console.log(user1.email);
// console.log(user1);


//08_String in javascript***********************************************************************
  

// backtics:- (``) --Also called String interpollation (most readable and reliable)

let uname1="asdf";
// console.log(typeof uname1);
let unameid=12;
// console.log(`Name of the user is ${uname1} and uid is ${unameid}`);

let uname2=new String("asdf");
// console.log(typeof uname2);
// console.log(uname1 == uname2);
// console.log(uname1 === uname2);


// let myname="  x y z  ";
// console.log(myname);
// console.log(myname.length);
// console.log(myname.charAt(2));
// console.log(myname.indexOf('y'));
// console.log(myname.concat(" asdfg"));
// console.log(myname.split());
// console.log(myname.replace(" ","8"));
// console.log(myname.replaceAll(" ","*"));
// console.log(myname.substring(2,3));
// console.log(myname.slice(2,3));
// console.log(myname.trim());
// console.log(myname.trim().concat(" asdfgh"));



//09_Number and maths **************************************************************************

//Number
let numb=1234.999;
// console.log(numb);
// console.log(typeof numb);

let numb1=new Number(numb);
// console.log(numb1);
// console.log(typeof numb1);

let numb2=numb1.toString();
// console.log(numb2);
// console.log(typeof numb2);

// console.log(numb2.length);

// console.log(numb1.toFixed(5));
// console.log(numb1.toPrecision(6));

const numb3=10000000;
// console.log(numb3.toLocaleString());
// console.log(numb3.toLocaleString('en-IN'));

//Maths
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.sqrt(9));
// console.log(Math.pow(2,3));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1));
// console.log(Math.floor((Math.random()*10)));

const min=10;
const max=20;

// console.log(Math.floor(Math.random()*(max-min+1)+min));

// 10_date and time****************************************************

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());

console.log("\n")
// let mySetDate=new Date(2024,2,13);
let mySetDate=new Date("2024-03-13");
// console.log(mySetDate.toString());


let mygetDate=new Date();
// console.log(mySetDate.getTime()/1000);
// console.log(Math.floor(mySetDate.getTime()/1000));
// console.log(mySetDate.getDate());
// console.log(mySetDate.getMonth());
// console.log(mySetDate.getDay());

// mygetDate.toLocaleDateString('default'{
//     weekday:"long"
// })


//11_Array in javascript*******************************************************************

let myArray=[1,2,3,4,5];
// console.log(myArray);

// myArray.push(6)
// myArray.push(7)
// myArray.pop();
// myArray.pop();
// myArray.pop();
// console.log(myArray);

// myArray.unshift(9);
// myArray.unshift(19);
// myArray.shift();
// myArray.shift();
// myArray.shift();
// console.log(myArray);

// console.log("A",myArray);
// let myArray2=myArray.slice(1,4);
// console.log(myArray2);
// console.log("C",myArray);

// console.log("B",myArray);
// let myArray3=myArray.splice(1,3);
// console.log(myArray3);
// console.log(myArray);
// console.log("C",myArray);


// let newArr=myArray.join();  //Here .join() convert array object into the String
// console.log(myArray);
// console.log(typeof myArray);
// console.log(newArr);
// console.log(typeof newArr);  //Here it print the array as a String


//13_Array in javascript  PART2 *******************************************************************

let family=["baba","bau","jhia","babu"];
// console.log(family);
// console.log(typeof family);
let family2=["dada","khudi","maa","adi","Sriyanshu"];
// family.push(family2)
// console.log(family);
// console.log(family[4]);
// console.log(family[4][1]);

// let family3=family.concat(family2);
// console.log(family3);
// console.log(family3[6]);


// console.log(...family,...family2)  //using spread operator



let myArr=[1,2,3,[4,5],6,[7,8,9,[10]]];
// console.log(myArr);
// console.log(myArr[5][3]);
// const myArr1=myArr.flat(Infinity);
// console.log(myArr1);

// console.log("RAM");
// console.log(typeof "RAM");
// console.log( Array.isArray("RAM"));
// console.log(typeof Array.isArray("RAM"));
// console.log(Array.from("RAM"));
// console.log(Array.from("RAM"));
// console.log(typeof Array.from("RAM"));
// console.log( Array.from("RAM")[1]);


// let s1=100;
// let s2=200;
// let s3=300.5;
// let s4="ram";
// let s5=[5];
// console.log(Array.of(s1,s2,s3,s4,s5[0]));
// console.log(typeof Array.of(s1,s2,s3.s4));


//14_ Objects in depth****************************************************************************
//OBJECT CAN BE DECLARED AS IN TWO WAYS
//ONE IS -Literals
//SECOND IS -Constructor

// Singleton
// Object.create--(Constructor method)

// Object Literals:  Here we can define both key and values
//  const JsUser={}

const mySym=Symbol("key1")  //use symbol as a key(Interview questions)
// console.log(typeof mySym);

const user ={
    name:"Sabitri Sahu",
    "full name":"Biswanath Sahu",
    rollno:123456,
    mySym:"myKey1",
    [mySym]:"myKey2"
}
// console.log(typeof user)
// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);

// FOR SYMBOL DATATYPE
// console.log(user.mySym);
// console.log(typeof user.mySym);
// console.log(user[mySym]);
// console.log(typeof user[mySym]);
// console.log(typeof mySym);
// console.log(typeof [mySym]);

// console.log(user);
// user.name="Sabisubha Sahu"
// console.log(user);
// Object.freeze(user)  //Here Object "user" is freez means further ,we cannot change the values
// user.name="Sabitrisubha Sahu"
// console.log(user);


user.greet=function(){
    console.log("hello world......")
}
// console.log(user.greet);
// console.log(user.greet());

user.greet1=function(){
    console.log(`hello world ${this.name}`)  //bactic-String interpolation
}
// console.log(user.greet1);
// console.log(user.greet1());


//15_Objects part 2************************************************************************************************

const tinderUser=new Object();  //Singleton object
// console.log(tinderUser);
// console.log(typeof tinderUser);

const tinderUser1={}; //Non-singleton object
tinderUser1.id="123abc";
tinderUser1.name="sbs Sahu"
tinderUser1.isLogedIn="false"
// console.log(tinderUser1);
// console.log(typeof tinderUser1);

const regularUser={
    gmail:"sbs@gmail.com",
    userName:{
      fullname:{
        firstName:"Sbs",
        lastName:"Sahu"
      }
    }
}
// console.log(regularUser);
// console.log(regularUser["gmail"]);
// console.log(regularUser.gmail);
// console.log(regularUser.userName);
// console.log(regularUser.userName.fullname);
// console.log(regularUser.userName.fullname.firstName);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// console.log(obj1,obj2);

//using Object.assing() method+++++++++
// const obj3=Object.assign(obj1,obj2);
// const obj3=Object.assign({},obj1,obj2); //here {} is source and obj1 or obj2 are the target/destnation
// console.log(obj3);

//using spread operator++++++++
const obj4={...obj1,...obj2};
// console.log(obj4);
// console.log(typeof obj4);

//Object inside array(It is useful for acessing the data value from the databases)++++++

const userX=[
    {
        id:1,
        gmail:"sbs1@gmail.com"
    },
    {
        id:2,
        gmail:"sbs2@gmail.com"
    },
    {
        id:3,
        gmail:"sbs3@gmail.com"
    }
]
// console.log(userX);
// console.log(userX[0]);
// console.log(userX[0].id);
// console.log(userX[0].gmail);
// console.log(userX[1]);
// console.log(userX[2]);
// console.log(userX[3]);

// console.log(tinderUser1);
// console.log(Object.keys(tinderUser1)); //here the out values are covert into the array means the ouput datatype is Array
// console.log(Object.values(tinderUser1));
// console.log(Object.entries(tinderUser1));

// console.log(tinderUser1.hasOwnProperty("isLogedIn"));
// console.log(tinderUser1.hasOwnProperty("isLoged"));




//16_Objects destructuring and JSON API**************************************************************
const course={
    courseName:"Javascript",
    coursePrice:999,
    courseTeacher:"Hitesh Sir"
}

// console.log(course.courseName);
// console.log(course["courseName"]);

// const {courseName}=course;
// console.log(courseName);

// const {coursePrice:language}=course;  //It is called object destructuring in javascript
// console.log(language);

// {
//     JSON;
// }

// JSON API Format
// {
//     "courseName":"Javascript",
//     "coursePrice":999,
//     "courseTeacher":"Hitesh Sir"
// }


//17_functions with objects*********************************************************************************

function fullname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// fullname()
// fullname()


// function addTwoNumber(num1 ,num2){
//    console.log(num1+num2);
// }
// const result=addTwoNumber(5+3)

// console.log("Resullt :"+ result)

function addTwoNumber(num1,num2){
    // result=num1+num2
    // console.log("Hitesh"); //Can be print the result because it is written before the "return" return statement
    // return result;
    // console.log("Hitesh Sir"); //Cannot be print the result because it is written after the "return" return statement

    return num1+num2; //Direct return No need to declare extra variable
}
// const result=addTwoNumber(5,3)
// console.log("Resullt :"+ result)


function loginUserMessage(username){
    return `${username} is logged in Just Now`
}
// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter username")
        return
    }
    return `${username} is logged in Just Now`
}
// console.log(loginUserMessage())
// console.log(loginUserMessage("Hitesh"))

function loginUserMessage(username){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} is logged in Just Now`
}
// console.log(loginUserMessage())
// console.log(loginUserMessage("Hitesh"))



//18_functions with objects******************************************************************************

// function calculateCartPrice(n1){
//     return n1;
// }
// console.log(calculateCartPrice(100))
// console.log(calculateCartPrice(100,200))

// function calculateCartPrice(...n1){
//     return n1;
// }
// console.log(calculateCartPrice(100))
// console.log(calculateCartPrice(100,200))

const users={
    name:"hitesh",
    age:30
}

function handleObject(a){
    console.log(`${a.name} is name and his age is ${a.age}`)
}
// handleObject(users)
// handleObject({
//     name:"ram",
//     age :21
// })

// const myArrr=[1,2,3];

function getArrayElemet(getArr){
    return getArr[1];
}
// console.log(getArrayElemet(myArrr))
// console.log(getArrayElemet([1,2,3]))




//19_Global and local scope**********************************************************************************


// let aa=20;
// const bb=30;
// var cc=10;
// console.log(a);
// console.log(b);
// console.log(c);

//Suppose any other programmer declare the 
var cc=300;

if(true){
    let aa=20;
    // console.log(b);
    const bb=30;
    // console.log(c);
    var cc=10;
    // console.log(a);
}

// console.log(aa);
// console.log(bb);
// console.log(cc);



//20_Scope level and mini hoisting**********************************************************************************



// function one(){
//     const a="hitesh";
    
//     function two(){
//         const b="youtube";
//         console.log("Name "+ a);
//         // console.log("Website "+b);   
//     }

//     // console.log("Website "+b);   
//     // two();
// }
// // one();


if(true){
    const a="hitesh";
    if(a==="hitesh"){
       const  b="website"
        // console.log(a+" "+ b)
    }
    // console.log(b);
}
// console.log(a);


// console.log(5);
// function c(n){
//     return n+1;
// }
// console.log(c(5));



// console.log(z(6));
// const z=function funn(n){
//     return n+1;
// }
// console.log(z(6));



// 21_this and arrow function**********************************************************************************************
    //    "this" -> keyword refers to the current context 
        //   In broswer the global object is the window-object

        const obj={
            username:"hitesh",
            age:10,
            welCome:function(){
                console.log(this);
                console.log(`${this.username}, welcome to my channel`);
                // console.log(`${username}, welcome to my channel`);
            }
        }
        
        // obj.welCome();
        // obj.username="ram"
        // obj.welCome();
        
    //  console.log(this);


        // function fun(){
        //     console.log(this);
        // }
        // fun();


        // const fun1=function fun(){
        //    let username="hitesh"
        //     console.log(this.username);
        // }
        // fun1();

        // const fun2=function(){
        //       let username="hitesh"
        //         console.log(this.username);
        // }
        // fun2();


            // FAT-ARROW FUNCTION
    //     const fun3=()=>{
    //         let username="hitesh"
    //           console.log(this.username);
    //           console.log(this);
    //   }
    //   fun3();


        //EXPLICITY RETURN: means "return" keyword used FOR FAT-ARROW FUNCTION 
    // const fun4=(num1,num2)=>{
    //     return num1+num2;
    // }
    // console.log(fun4(5,5));

        // IMPLICITY RETURN : means "return" keyword does not used FOR FAT-ARROW FUNCTION 
        //      // method1
        // const fun5=(nn1,nn2)=>   nn1+nn2;  
        // console.log(fun5(5,6));

        // // method2
        // const fun6=(n1,n2)=>(n1+n2)
        // console.log(fun6(5,7));


                // FOR OBJECT RETURN IN FAT-ARROW FUNCTION MUST USE PARENTHES
                // const fun6=(n1,n2)=>({username:"hitesh",
                //     age:28
                // })
                // console.log(fun6(5,6));


    //  (1) const a=forEach(function(){

    //     })
    // (2) const b=forEach(()=>{

    //     })
    // (3) const c=forEach(()=>(

    //    ))



// 22_ Immediately Invoked Function Expression (IIFE)************************************************************************************************
            // Remove the problem of GLOBAL SCOPE variable or polution WE use the IIFE -> "()();"
                // Here at the end of the function we must use the semicolon Otherwise it can be give error

        // (function fun(){
        //     console.log("Hello Gyus");
        // })()

        // (function(params) {
        //     console.log("Hello Guys");
        // })();



// 23_How does javascript works behind the scene*****************************************************************************************************
            //JAVASCRIPT EXECUTION CONTEXT
            //   1-> Global EXecution Context
            //   2-> Function Execution Context
            //   3-> Eval Execution Context

        // JAVASCRIT CODE RUN IN TWO WAYS
            // 1->Memeory creation phase
            // 2->Execution phase

            // First Cycle:-> (1)Global EXecution
            //                      |
            //                      this
            //                       |
            //                 (2)  Memory Phase

            // Second Cycle-> (3)

            // function f1() {
            //     console.log("one");
            //     f2();
            // }
            // function f2() {
            //     console.log("two");
            //     f3();
            // }
            // function f3() {
            //     console.log("three");
            // }
            
            // f1();
            // f2();
            // f3();


//24_Control flow in javascript*******************************************************************************************************************

        // CONDITIONAL OPERATOR : <, >, <=, >=, !=, ==, ===, !=
        // Here "==" :-> Just Check the values
        //      "===" :-> Check Value as well as data type of the value

    // IF-ELSE CONDITIOANL STATEMENT
            //  if(2=="2"){
            //     console.log("Executed");
            //  }

            //  if(2==="2"){
            //     console.log("Executed");
            // }else{
                
            //     console.log("Not Executed");
            //  }


                    // SHORT HAND NOTATION FOR THE IF  CONDITION
                    // if(1<2) console.log("Executed");
                    // if(1<2) console.log("Executed"),console.log("Executed");  //Also called Implicity Scope


    //IF ELSE-IF CONDITIOANL STATEMENT
            // const a=1000;
            // if(a<500){
            //     console.log("Is less than 500")
            // }
            // else if(a< 900){
            //     console.log("Is less than 900")
                
            // }
            // else if (a<999){
            //     console.log("Is less than 999")
                
            // }else{
            //     console.log("Is less than 1001")

            // }
    

    //SWITCH CONDITIOANL STATEMENT
        const month=3;
        // switch(month){
        //     case 1:
        //         console.log("Jan");
        //         break;
        //     case 2:
        //         console.log("Feb");
        //         break;
        //     case 3:
        //         console.log("Mar");
        //         break;
        //     case 4:
        //         console.log("Apr");
        //         break;
        //     default:
        //         console.log("No match");
        //         break;
        // }

    //TRUTHY/FALSY STATEMENT
            // ""  -> Empty String is js consider as false
            // []  -> Emprt Array in js consider as true


                // FALSY VALYE 
                    // false , 0, -0, BigInt 0n, "", null , undefined, NaN
                 // TRUTHY VALYE 
                    // "0", 'false', " ", [], {}->Object ,function(){}->Empty function


    // checkEmpty array is Empty or not

    // const a=[];
    // if(a.length===0){
    //     console.log(`Array is Empty`);
    // }else{
        
        //     console.log(`Array is not Empty`);
        // }
        

 // check Empty Object  is Empty or not
        const b={a:1};
        // if(Object.keys(b).length===0){
            
        //         console.log(`Object is Empty`);
        //     }else{
        //     console.log(`Object is not Empty`);
        // }


        // console.log(false==0)
        // console.log(false=='')
        // console.log(0==false)
        // console.log(0=='')  


        //NULLISH COALESCING OPERATOR (??): work on -> null, undefined

        let a=10;
        // a=5 ?? 10;
        // a=null ?? 10;
        // a=undefined ?? 10;
        //    a=null ?? 15??10
        // console.log(a);


        // TERNIARY OPERATOR
            // condition ? true : false;
               const i=10;
                // a>=19? console.log("true"):console.log("false");




// 25_for loop break and continue******************************************************************************************************

        for(let i=1;i<=10;i++){
            // console.log(`Multiplication Table for ${i}`);
            for(let j=1;j<=10;j++){
                // console.log(`${i} * ${j} = ${i*j}`);
            }
        }

        let myAr=["baba","bau","jhia","babu"]
        for(let i=0;i<myAr.length;i++){
            // const element=myAr[i];
            // console.log(myAr[i]);
            // console.log(element);
        }



            // BREAK
            for(let i=1;i<=10;i++){
                if(i==5){
                    // console.log(`Detected number is ${i}`);
                    break;
                }
                // console.log(i);
            }

        //    CONTINUE
           for(let i=1;i<=10;i++){
            if(i==5){
                // console.log(`Detected number is ${i}`);
                continue;
            }
            // console.log(i);
           }




// 26_while do while loop**************************************************************************************************************************
       
        //    ENTRY CONTROLED
        // let ab=1;
        // while(ab<=10){
        //     console.log(ab);
        //     ab++;
        // }


        //      EXIT CONTROLED
        let cd=22;
        do{
            // console.log(cd);
            cd++;
        }while(cd<=10);


//27_High order array loops*************************************************************************************************************************


        //for of Loop
   const arr=[1,2,3,4,5];
   for(const i of arr){
    // console.log(i);
   }

   const str="hello guys";
   for(const i of str){
    // console.log(i);
   }

//    const map=new Map();
//    map.set('KON',"Konkorada");
//    map.set('KAU',"Kaudia");
//    map.set('KAR',"Karakhandi");

// for(const [key,values] of map ){
    // console.log(key +":-"+values);
// }


//Object cannot be iterable in for of loop
const myObj={
    'game1':'free fire',
    'game2':'PUBG',
    'game3':'LUDO'
}



// FOR IN LOOP
const myOb={
    'game1':'free fire',
    'game2':'PUBG',
    'game3':'LUDO'
}
for (const key in myOb) {
//    console.log(key);
//    console.log(myOb[key]);
}


const my=["one","two","three"]

for(const key in my){
    // console.log(key)
    // console.log(my[key]);
}


//HERE MAP CAN NOT BE ITERABLE IN THE FOR IN LOOP
const map=new Map();
// map.set('KON',"Konkorada");
// map.set('KAU',"Kaudia");
// map.set('KAR',"Karakhandi");

// for(const key in map){
//     console.log(key);
// }


//imp :-> FOR EACH LOOP
    const coding=["c","c++","java","html","css","javascript"];

    coding.forEach(function (lan){
        // console.log(lan);
    })


    coding.forEach((l)=>{
        // console.log("my language "+l)
    });

    // coding.forEach((language)=>(
    //      console.log(`I am comfortable in ${language}`)  
    // ));


    function fun(item){
        // console.log("using function: "+item);
    }
    coding.forEach(fun);


    coding.forEach((item,index,arr)=>{
        // console.log(item,index+1,arr);
    })

    const myarr=[
        {
            courseName:"c",
            extension:".c"
        },
        {
            courseName:"c++",
            extension:".cpp"
        },
        {
            courseName:"Java",
            extension:".java"
        },
        {
            courseName:"Python",
            extension:".py"
        }
    ]

    myarr.forEach((obj)=>{
        // console.log("My language is: "+obj.courseName+" and extension is: "+obj.extension);
        
    })




// 28_filter map and reduce*****************************************************************************************************************
  
const language=["c","c++","java","html","css","javascript"];

const value=language.forEach((item)=>{
    // console.log(item);
    // return;
})
// console.log(value);

    // ****FILTER**********  Here we dont need to create new array but in for each loop we need to create new array

    const myNum=[1,2,3,4,5,6,7,8,9,10];

    //EXPLICTY RETURN

    const ret1=myNum.filter((n)=>{
        return n>5;
    })
    // console.log(ret1);

    //IMPLICITY RETURN
    const ret3=myNum.filter((n)=>(n>5))
    // console.log(ret3)

    const ret2=myNum.filter((n)=>n>5) 
    // console.log(ret2);
  
//    **********MAP*****************************

        let myArrr=[1,2,3,4,5]
        const addTen=myArrr.map((n)=> n+10);
        // console.log(addTen)


// *****************REDUCE***************************


        let array1=[1,2,3,4,5];
        const initialValue=0;

        const sumofTenNum=array1.reduce((n1,n2)=>(
            n1+n2
        ),initialValue);
        // console.log(sumofTenNum);
        
