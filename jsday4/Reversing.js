function Revers(n){
    var result= new Array();
    debugger;
    for( var i=0; i<=n.length-1; i++){
        result.unshift(n[i])
    }
    console.log(result);

}
Revers(["A", "B", "C","D"]);