function matrix(arr){
    var res = new Array();
    for( i in arr){
        res[i]=[];
        for(j in arr){
            res[i][j]=1;
        }
    }
    return res;
}
function setnum(arr, res){
    for( var i in arr){
        for ( j in arr) {
            if(arr[i][j]==0 ){
                for(x in arr){
                    res[i][x]=0;
                }
                for(z in arr){
                    res[z][j]=0;
                }
            }
        }
    }
    return res;
}
function set0(arr){
    var res=matrix(arr);
    return setnum(arr,res);
}
console.log(set0(
    [
        [1, 0, 1, 0],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1]
        ]
))