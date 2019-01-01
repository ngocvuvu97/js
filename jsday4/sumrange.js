
function smaller(x1,x2,x3){
    var result= new Array();
    if(x3>0){
        var x=x1
         for (x ; x<=x2 ;x=x+x3){
                result.push(x);
            } 
        return result;
    }
    if(x3<0){
        var x=x2;
        x2= x1;
         for (x ; x>=x2 ;x=x+x3){
                result.push(x);
            }
            return result;
    }
    

}
function greater(x1,x2,x3){
    var result= new Array();
    if(x3>0){
        var x=x2;
        for (x ; x<=x1 ;x=x+x3){
        result.push(x);
        }
        return result;
    }
    if(x3<0){
        var x=x1;
        x2= x2;
         for (x ; x>=x2 ;x=x+x3){
                result.push(x);
        }
        return result;
    }
    
}
function arr(x1,x2,x3){
    if(!x3){
        x3=1;
    }
    debugger;
    if(x1<=x2){
         return smaller(x1,x2,x3);
    }
    
    else{
        return greater(x1,x2,x3);
    }
}
function sumrange( x1,x2,x3) { 
    let t= arr(x1,x2,x3);
    var kq=0;
    for(i=0;i<t.length; i++){
        kq= kq + parseInt(t[i]);
    }
    return (kq);
 }
console.log(sumrange(1,19,-3));



