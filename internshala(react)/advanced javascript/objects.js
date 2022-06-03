// object destructuring 

const myItems={
    name:"kunal",
    age:21,
    course:"cse"
}

const {name:myName,age,course}=myItems;
console.log(myName,age,course)


const fn1=({name="unknownName",age="x",course="xyz"}={})=>{
    console.log(myName,age,course)
   }
// or 
const fn2=({name:myName,age,course}={name:"unknownName",age:"x",course:"xyz"})=>{
 console.log(myName,age,course)
}
fn1(myItems)


// array destructuring 

const somearr=[1,2,3,4]

const [first,second,third]=somearr

console.log(first,second,third)
