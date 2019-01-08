function binary(n){
    var arr= new Array();
    var mu=0;
    if(n==0){
        arr.push('000')
    }
    else{
        n=n+1;
        for( i=0;i<10000000 ;i++){
            if(Math.pow(2,i) <=n && Math.pow(2,i+1)>n){
                mu=i;
            }
        }
        for(j=mu; j>=0;j--){
           if(n > Math.pow(2,j) ){
               arr.push(1);
               n= n-Math.pow(2,j);
           }
           else{
               arr.push(0)
           }
        }
    }
    return arr.join('');
}
console.log(binary(1234567896874524864525257525219997469))