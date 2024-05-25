// let element=["baba","bau","jhia","babu"];
// for(let ele in element){
//     console.log(ele);
// }
// console.log("*****************");

// for(let ele of element){
//     console.log(ele+" ");
// }

// console.log("*****************");
// for(let i=0;i<element.length;i++){
//     console.log(element[i]+" ");
 
// }

// console.log("*****************");
// for(let i=0;i<element.length;i++){
//     process.stdout.write(element[i] + " ");
    
// }

// console.log();
// console.log("*****************");
// let out=" ";
// for(let i=0;i<element.length;i++){
//     out=out+element[i]+" ";
// }
// console.log(out);

// console.log();
// console.log("*****************");
// let sline="";
// element.forEach((ele)=>{
//     console.log(ele);
//     sline+=ele+" ";
// });
// console.log(sline);

// ******************************************************ARRAY DESTRUCTURING******************************************


let myArr=["Biswa","Nath","Sahu"];
console.log(myArr);
let firstName=myArr[0];
let midName=myArr[1];
let lastName=myArr[2];
console.log(firstName);
console.log(midName);
console.log(lastName);
console.log("##############")
let[fn,mn,ln]=myArr;//Array Destructuring
console.log(`${fn} ${mn} ${ln}`);

console.log("***********************************");



// ******************************************************OBJECT DESTRUCTURING******************************************

const myObj={
    fname:"Biswa",
    mname:"Nath",
    lname:"Sahu"
}
console.log(myObj);
console.log(myObj.fname);
console.log(myObj.mname);
console.log(myObj.lname);
console.log("##############")
// let {fname,mname,lname}=myObj;//Object Destructuring
// console.log(fname);
// console.log(mname);
// console.log(lname);

console.log("##############")
let{fname,...rest}=myObj;
console.log(fname);
console.log(rest);