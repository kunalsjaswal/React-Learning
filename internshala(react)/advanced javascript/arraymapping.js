const arr1=[1,2,3,4,5,6]

//it iterates over every element  i.e., alternative to for loop

arr1.map((val,index,arr1)=>{
    console.log(val," at index: ",index," from the array : ",arr1)
})

const result= arr1.map((val,index,arr1)=>{
    return val
})

console.log(result)