function PascalTriangle(n) {
    var arr = [], add ;
    for(var i=0;i<n;i++){
                //Each element in array is in turn an array
                // The index is the row number and the array values are the row values
        arr[i]=[];
        for(var j=0; j<=i; j++){
            if(j==i){
            arr[i].push(1);
        }else{
            add = (arr[i-1][j-1]?arr[i-1][j-1]:0)+(arr[i-1][j]?arr[i-1][j]:0);
            arr[i].push(add);
            }
        }
    }
    console.log(arr)
            return arr;
}
PascalTriangle(10)
arr[i-1][j-1]?arr[i-1][j-1]:0 // fallback