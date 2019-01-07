const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));

// function forEach(detail){
//     var res= new Array();
//     for(i in detail){
//         res.push(`${detail[i].first_name} ${detail[i].last_name}`)
//     }
//     return res;
// console.log(forEach(data))

//ex1
const arr1 = [];
data.forEach((data) => {
    arr1.push(`${data.first_name+" "+ data.last_name}`)
})
//console.log(arr1)

//ex2
const arr2 = [];
data.filter(function(data){
    if(data.age < 40 && data.gender=="Male" ){
        arr2.push(data)
    }
})
//console.log(arr2);
//ex3
const arr3 = [];
data.map(function(data) {
    arr3.push(`${data.first_name+" "+ data.last_name}`)
});
//console.log(arr3);
//ex4
data.map(function (data) { 
    data["firstName"]=data["first_name"];
    data["lastName"]=data["last_name"];
    delete data["first_name"];
    delete data["last_name"];
});
//console.log(data);

//ex5

let sumage = (data.reduce((age, data) => {
    return age += data.age;
}, 0))/data.length
//console.log(sumage);
//ex




