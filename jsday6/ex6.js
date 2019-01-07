const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', 'utf-8'));

// let sumage = (data.reduce((age, data) => {
//     return age += data.age;
// }, 0))/data.length
// console.log(sumage);
//ex1
let fullname= data.reduce((name,data) =>{
    return name.concat(`${data.first_name} ${data.last_name}`)
},[]);
//console.log(fullname)
//ex2
let MaleUnder40= data.reduce((name,data)=>{
    var temp;
    if(data.age < "40" && data.gender == "Male")
        temp =`${data.first_name} ${data.last_name}`;
    if (temp==undefined){
        return name.concat()
    }else
    return name.concat(temp)
},[])
//console.log(MaleUnder40)
//ex4
var count =0;
let rename=data.reduce((name,data)=>{
    count++;
    data["firstName"]=data["first_name"];
    data["lastName"]=data["last_name"];
    delete data["first_name"];
    delete data["last_name"];
    return name.concat(data)
},[])
//console.log(rename);

