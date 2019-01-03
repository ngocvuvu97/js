function rota(arr) {
     arr = arr.reverse();
     debugger;
     for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < i; j++) {
        var backup = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = backup;
       }
     }
     return arr;
   }
   console.log(rota([[1,2,3],[4,5,6],[7,8,9]]))
