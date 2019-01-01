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
    var result = new Array();
    var result2= mactric(n);
    for(let i=0; i<2*n-1; i++){
        result[i]=[];
    }
    
    for(let i=0; i<n; i++){
        for( var z=0;z<n;z++){
            result[i+z].push(result2[i][z]);
        }
    }
    console.log(result);
}
anti(5);