function roma(num) {
   res = testnum(num);
   if(res==false){
       return undefined
   }else{
    for (i in res) {
        if (res[i] == "M") {
          res[i] = 1000;
        }
        if (res[i] == "D") {
          res[i] = 500;
        }
        if (res[i] == "C") {
          res[i] = 100;
        }
        if (res[i] == "L") {
          res[i] = 50;
        }
        if (res[i] == "X") {
          res[i] = 10;
        }
        if (res[i] == "V") {
          res[i] = 5;
        }
        if (res[i] == "I") {
          res[i] = 1;
        }
      }
   }
   return total(res)
}
function testnum(num) {
  let arrIXCM = ["I", "X", "C", "M"];
  let arrVLD = ["V", "L", "D"];
  let arr = arrIXCM.concat(arrVLD);
  var test = num.split("");
  var count = 1;
  var res = [];
  var temp = [];
  //dem so va loai trg hop k thuoc IXCMVLD
  for (i = 0; i < test.length; i++) {
    if (!arr.includes(test[i])) {
      return false;
    }
    if (test[i] == test[i + 1]) {
      count++;
    } else {
      res.push(count);
      res.push(test[i]);
      count = 1;
    }
  }
  //  I, X, C, M, sẽ không được phép lặp lại quá 3 laa
  //   V, L, D xuất hiện 1 lần duy nhất
  for (i = 1; i < res.length; i += 2) {
    if (arrIXCM.includes(res[i]) && res[i - 1] > 3) {
      return false;
    }
    if (arrVLD.includes(res[i]) && res[i - 1] != 1) {
      return false;
    }
    temp.push(res[i])
  }
  // chỉ có I đúng trước V hoặc X
  // X sẽ được phép đứng trước L hoặc C
  // C chỉ có thể đứng trước D hoặc M
  for( i =0 ; i<temp.length ; i++){
    if((temp[i]=='D'&& !( temp[i+1]=='L' || temp[i+1]=='C'||temp[i+1]=='X'||temp[i+1]=='V'||temp[i+1]=='I'|| temp[i+1]== undefined  ))){
        return false
    }
    if((temp[i]=='C'&& !( temp[i+1]=='D' || temp[i+1]=='M'||temp[i+1]=='L'||temp[i+1]=='X'||temp[i+1]=='V'||temp[i+1]=='I'|| temp[i+1]== undefined  ))){
        return false
    }
    if((temp[i]=='L'&& !( temp[i+1]=='X' || temp[i+1]=='V'||temp[i+1]=='I'|| temp[i+1]== undefined  ))){
        return false
    }
    if((temp[i]=='X'&& !( temp[i+1]=='L' || temp[i+1]=='C'||temp[i+1]=='I'||temp[i+1]=='V'|| temp[i+1]== undefined  ))){
        return false
    }
    if((temp[i]=='V'&& !( temp[i+1]=='I'|| temp[i+1]== undefined  ))){
        return false
    }
    if((temp[i]=='I'&& !( temp[i+1]=='X'|| temp[i+1]=='V'|| temp[i+1]== undefined  ))){
        return false
    }
    
  }
  return res;
}
function total(res) {
    result = [];
    for (i = 0; i < res.length; i += 2) {
      result.push(res[i] * res[i + 1]);
    }
    for (i = 1; i < result.length; i++) {
      if (result[i - 1] < result[i]) {
        result[i - 1] = result[i] - result[i - 1];
        result[i] = 0;
        i++;
      }
    }
  
    return result.reduce((a, b) => a + b, 0);
  }
console.log(roma("IIIIII"));
console.log(roma("XCx"));
console.log(roma("DXV"));
console.log(roma("MDCCCIV"));
console.log(roma("MDCCCXC"));
console.log(roma("MMXVIII"));
console.log(roma("MMXVVXIII"));
