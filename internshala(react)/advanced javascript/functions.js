// function expression : we can call this after declaring only

const fn1=function(){
    console.log("this is function expression")
}


fn2();
// function declaration : we can call this even before declaring
function fn2(){
    console.log("this is function declaration")
}

fn1();


// default functions 
function myname(){
    return 'kunal';
}

// arrow functions : always used as function expression

const myname2=()=>{
    return "kunal";
}
// or -short syntax
const myname3=()=>'kunal';

// console.log(myname(),myname2(),myname3())


function defaultparams(name="default"){
    console.log("my name is",name)
}

defaultparams("kunal")