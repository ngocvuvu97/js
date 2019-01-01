function mactric(n){
    var result1= new Array();
    var count =1 ;
    for (var i=0 ;i<n; i++) {
         result1[i] = [];
        for( var y=0;y<n; y++){
            result1[i][y] = count;
            count++;
        }
    }
    return result1;
}

function anti(n){
    var countAnti =0;
    var result= new Array();
    var hihi= new Array();
    var result2= mactric(n);
    for(var i=0; i<(n*2-1); i++){
        result[i]=[];
        if(i<n){
            for( var z=0;z<=i;z++){
                result[i][z] = result2[z][i-z]
            }

        }else{
            for( var z=n; z>n-z; z--){
                   result[i][n-z-k] = result2[2][2]
            } 
        }
    }
    console.log(result)
}
anti(5)