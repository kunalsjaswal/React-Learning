// it iterates iver array toString. but it reduce all elements to single value 

const arr=[5,2,4,6,7]

const result= arr.reduce((perviousVal,currVal)=>{
    console.log(perviousVal,currVal)
    return currVal
},0)

// to add 
const addition= arr.reduce((perviousVal,currVal)=>{
    return currVal+perviousVal
},0)



console.log("last: ",result)  //output only single value
console.log("sum of array: ",addition)