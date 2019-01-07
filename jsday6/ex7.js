const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));
//ex7
function map(arr, transform) {
    var res = [];
    for (i of arr) {
        res.push(transform(i));
    }
    return res;
}

//ex8
function filter(arr, transform) {
    let res = [];
    for (i of arr) {
        if (transform(i)) {
            res.push(i);
        }
    }return res;
}
//console.log(data);

//ex9
function reducearr(arr, fn , defaultValue) {
    res =(defaultValue || [])
    if(typeof(res)!=="object"){
        for( i of arr){
            fn(res, arr[i])
            return res
        }
    }else{
        for( i of arr){
            var temp;
            temp= fn(i)
            if(temp==undefined){
            return res
            }else{
                return res.push(temp)
            }
        }
    }
}
//ex10
let arr =[1,2,3,4]
console.log(arr.reducearr(map,[]))
