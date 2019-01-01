function largestNumber(n) {
    var arr = [];
    var res = '';
    for (i in n) {
        arr.push(n[i]+'');
    }
    arr.sort(function (a, b) {
        var LR = a+b;
        var RL = b+a;
        if (LR > RL) {
          return -1;
        }
        else if (LR < RL) {
          return 1;
        }
        else{
            return 0;
        }
    }); 
    for (i in arr) {
        res += arr[i];
    }
    return parseInt(res);
 }
 console.log(largestNumber([3, 30, 30, 34, 5, 90 , 9 ,90]));
 console.log(largestNumber([9, 99, 98, 998, 9997]));