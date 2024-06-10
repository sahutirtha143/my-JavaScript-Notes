  //prototype######################################################################


  let myHero=["thor","spiderman"];


  let heroPower={
    thor:"hamer",
    spiderman:"Spidy",

    getSpidermanPower:function(){
        console.log(`The spidy is the power of ${this.spiderman}`);
    }
  }

//   console.log(myHero);
//   console.log(heroPower);
//   console.log(heroPower.getSpidermanPower());


Object.prototype.kanchan=function(){
    console.log(`Kanchan is present for all the object`);
}

Array.prototype.kasinath=function(){
    console.log("kasinath say hello to every one");
}

// myHero.kanchan();
// heroPower.kanchan();

// myHero.kasinath();
// heroPower.kasinath(); //TypeError: heroPower.kasinath is not a function

// ################################################################################################

const jaga="jagannath           ";
console.log("Length :"+jaga.length);

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length of the string is: ${this.trim().length}`)
}

jaga.trueLength();
"Anuradha   ".trueLength();





