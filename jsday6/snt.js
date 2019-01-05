

function snt(n){
    if (n < 2){
        return false;
    }
    else if (n == 2){
        return true;
    }
    else if (n % 2 == 0){
      return false;
    }
    else{
        for (var i = 3; i < n-1; i+=2)
        {
            if (n % i == 0){
               return false;
            }
            else return true
        }
    }
}
console.log(snt(17));

