const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));

// function forEach(detail){
//     var res= new Array();
//     for(i in detail){
//         res.push(`${detail[i].first_name} ${detail[i].last_name}`)
//     }
//     return res;
//console.log(forEach(data))

//ex1
const arr1 = []
data.forEach((data) => {
    let result = `${data.first_name+" "+ data.last_name}`;
    arr1.push(result);
})
//console.log(arr1)

//ex2

