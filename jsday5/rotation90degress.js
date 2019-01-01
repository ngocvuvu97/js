
function rotation(arr) {
     arr = arr.reverse();
     debugger;
     for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < i; j++) {
        var temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
       }
     }
     return arr;
   }
   console.log(rotation([[1,2,3],[4,5,6],[7,8,9]]))