// promises 
// promise states: 1. pending 
//                 2. resolved
//                 3. rejected

const doSome=new Promise((resolve,reject)=>{
    // resolve("successfull")
    reject("error occured")
})

doSome.then((resolveVal=>{   // if promise resolve-> then 
    console.log(resolveVal)
}))
.catch((err)=>{              // if promise rejected -> catch  
    console.log(err)
})


// example 2 :multiple .then 

const someObj={
    name:"kunal",
    age:21
}

const somePromise=new Promise((resolve)=>{
    resolve(someObj)
})
.then((reslovedVal)=> reslovedVal)        // then1===resolvedVal
.then((then1)=> console.log(then1));


// async await : alternate to promises