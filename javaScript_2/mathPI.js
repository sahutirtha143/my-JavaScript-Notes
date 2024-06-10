// const descriptor= Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);


const user={
    name:"SBS Sahu",
    pass:"sbs@143"
}

console.log(user);
console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user,"name",{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));