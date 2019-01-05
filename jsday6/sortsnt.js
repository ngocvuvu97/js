function snt(n){
    var arr =new Array();
    
    if (n < 2){
        return "không có số nguyên tố nào hết nha!"
    }
    else if (n == 2){
        arr.push("2")
    }
    else{
        arr.push(2);
        var z;
        for (var i = 3; i <= n; i+=2){
            let bo = true;
            for (j=2;j<i;j++){
                if(i%j == 0){
                    bo = false;
                    break;
                }                
            }
            if (bo) {
             arr.push(i);
            }
                       
        }
    }
    return arr
}
console.log(snt(111111));