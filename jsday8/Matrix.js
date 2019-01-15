function taohinhthoi(n){
    var res= new Array();
    for(i=0;i<2*n.length-1;i++){
        res[i]=[]
    }
    debugger
    for(i=0;i<n.length;i++){
        for(j=0;j<n.length;j++){
            res[i+j].push(n[i][j])   
         }
    }
    return res
}
// function factorial(n) { 
//     var fac=1
//     for(i=1; i<=n;i++){
//         fac*=i
//     }
//     return fac
// }
function Matric(n) { 
    var res = taohinhthoi(n);
    var res1 =new Array()
    for (var i=0;i<3;i++){
        res1[i]=[]
        for( j=0; j<res[n.length];j++){
            res1[i][j]=[]
        }
    }
    for(var i=0;i<res[(res.length+1)/2].length; i++){


    }
}
 console.log(Matric([[1, 2, 3],
    [4, 5, 6],

    [7, 8, 9]]))
