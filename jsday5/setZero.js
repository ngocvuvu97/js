// function matrix(arr){
//     var res = new Array();
//     for( i in arr){
//         res[i]=[];
//         for(j in arr){
//             res[i][j]=1;
//         }
//     }
//     return res;
// }
// function setnum(arr, res){
//     for( var i in arr){
//         for ( j in arr) {
//             if(arr[i][j]==0 ){
//                 for(x in arr){
//                     res[i][x]=0;
//                 }
//                 for(z in arr){
//                     res[z][j]=0;
//                 }
//             }
//         }
//     }
//     return res;
// }
// function set0(arr){
//     var res=matrix(arr);
//     return setnum(arr,res);
// }



function setzero(arr){
    for ( i in arr){
        for(j in arr){
            if(arr[i][j]==0){
                for( z in arr){
                    arr[i][z]==0?arr[i][z]=0:arr[i][z]=2
                }
                for( k in arr){
                    arr[k][j]==0?arr[k][j]=0:arr[k][j]=2
                }
            }
        }
    }
    for ( i in arr){
        for(j in arr){
            if(arr[i][j]==2){
                arr[i][j] =0
            }
        }
    }
    return arr;
}
console.log(setzero(
    [
        [1, 0, 1, 0],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1]
        ]
));
