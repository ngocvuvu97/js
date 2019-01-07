let arr = [1,2,3,4,5];
let sum=(a,b)=>{
    return a+b
}
let product=(a,b)=>{
    return a*b
}

let reverse=(a,b)=>{
    a.unshift(b);
    return a
}
console.log(arr.reduce(sum,0))
console.log(arr.reduce(product,1))
console.log(arr.reduce(reverse,[]))