function excolnum(n){
     var total=0;
     var len=n.length
    var arr=n.split('');
    debugger;
    for(i in arr){
        var str= (`${arr[i]}`);
        var current;
        if(len-i>1){
            current = str.charCodeAt(0)-64;
            current= current*26*(len-i-1)
            total+=current
        }else{
            current = str.charCodeAt(0)-64;
            total+=current
        }
    }
    return total
}
console.log(excolnum('A'));
console.log(excolnum('B'));
console.log(excolnum('C'));
console.log(excolnum('Z'));
console.log(excolnum('AA'));
console.log(excolnum('AB'));