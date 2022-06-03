// var vs const vs let 

// const: constant fro variable but we can change objects
// let : it is eclosed to the closest function 
// var is used almost everywhere

function printmyname(){
    if (5>3) {
        var name="kunal";
        let name2="isngh jaswal"
        
    }
    console.log(name,name2)
}

const obj1={
    name:"kuanal",
    id:1
}
obj1.name="kunal singh jaswal"   //changing const object values
console.log(obj1.name) 

// printmyname()