// ...rest || to folds into one element
//  ...spread ||to unfold and merge

function someFunct(arg1,...restArgs){
    console.log("arg1:",arg1)
    console.log("rest Arguments: ",restArgs)
}
someFunct("kunal","age:",21)

// ...rest in objects 
const someObj={
    name:"kunal",
    age:21,
    hobby:"guitar",
    country:"india"
}
const {name,...restValues}=someObj;
console.log(name,restValues)


// ...rest in array 
const someArray=[2,4,1,5];
const [num1,...restNum]=someArray;
console.log(num1,restNum)

// ...spread using objects
const someNewObj={
    state:"HP",
    car:"Hyundai"
}

const mergedObj={...someObj , ...someNewObj}
console.log(mergedObj)

// ...spread in arrays 
const someNewArray=[12,34,45,98]
const mergerArray=[...someArray,...someNewArray]
console.log(mergerArray)