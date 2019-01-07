///ex1.1
function empty(o) {
    o = null;
}
var x = [1,2,3,4];
empty(x);
//console.log(x);//[arr]
//ex1.2
var x = 1;
var y = 2;
function swap(a, b) {
    return [a, b] = [b, a];
}
swap(x,y);
//console.log(x); // 1
//ex2.1
function indentity(arg) { 
    return arg
}
//ex2.2
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
//ex2.3
function indentifyf(arg) { 
    return indentity(arg)
}
//console.log(indentifyf(4));
//ex2.4
const addf=num1=>num2=>num1+num2;
//console.log(addf(3)(4));
//ex2.5
const liftf =(addf)=>x =>y =>x*y;
//console.log(liftf(addf)(5)(6));
//console.log(addf(3)(4));
//ex2.6
const add3=x=>x+3;
const mull=x=>x;
const curry=(mull,x)=>y=> y*mull(x);
//console.log(add3(4))
//console.log(curry(mull,5)(6));
//ex2.7
let inc1 = addf(1);
console.log(inc1);









