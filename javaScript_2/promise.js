
// PROMISE-1:***************************************************************************
// const promiseOne=new Promise((resolve,reject)=>{
//     // USE OF PROMISE
//     //do an asyn task
//     //Database call, cryptograph, network

//     setTimeout(()=>{
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// });

// promiseOne.then(()=>{
// console.log("Promise consumed");
// console.log("***************************************")
// });

// PROMISE-2:******************************************************************************

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Asyn task 2");
//         resolve();  
//     },1000)
// }).then(()=>{
//     console.log("Asyn 2 resolved");
// })


// PROMISE-3:******************************************************************************
console.log("***************************************")

// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username: "SBS",email:"sbs@gmail.com"});//Every this inside reslove method is object
//     },1000);
// });
// promiseThree.then((user)=>{
//     console.log(user);
//     console.log("***************************************")
// });


// PROMISE-4:*********************************************************************************
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=false;
        // let err=true;
        if(!err){
            resolve({uname:"SBS",email:"sbs@gmail.com"});
        }else{
            reject("ERROR: Somithing went worng");
        }
    },1000)
});

promiseFour
.then((user)=>{
    console.log(user);
    return user.uname;
})
.then((uname)=>{
    console.log(uname);
})
.catch(()=>{
    console.log("error");
})
.finally(()=>{
    console.log("The promise either resolved or rejectd");
    console.log("***************************************")
})



// PROMISE-5:**************************************************************************

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=true;
        if(!err){
            resolve({couse:"JavaScript", passwors: "123"});
        }else{
            reject("Error: JS went worng");
        }
    },1000)
})

const consumePromiseFive=async ()=>{
    try {
        const response=await promiseFive;
        console.log(response);
        
        console.log("***************************************")
    } catch (error) {
        console.log(error)
        console.log("***************************************")
   }
}
consumePromiseFive();


// PROMISE-6:********************************************************************************************

// const myGitData=async ()=>{
    //        try {
        //         const response=await fetch('https://api.github.com/users/sahutirtha143');
        //         // console.log(response);
        //         // const data=response.json();
        //         const data=await response.json();
        //         console.log(data);
        //        } catch (error) {
            //         console.log("E :"+error)
            //        }
            // }
            // myGitData();
            
           

// PROMISE-7:********************************************************************************************
fetch('https://api.github.com/users/sahutirtha143')
.then((response)=>{
    // console.log(response);
    // console.log("***************************************");
    return response.json();
})
.then((data)=>{
    console.log(data);
    console.log("***************************************");
})
.catch((error)=>{
    console.log(error);
})