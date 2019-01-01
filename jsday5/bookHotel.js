
  function book(arrival, departure , room) {
    arrival.sort();
    departure .sort();
    var i = 0, j =0 , avaiable=0;
    while (i < arrival.length && j < departure .length) {
        if (arrival[i] < departure [j]) {
            i++;
            avaiable++;
        }
        else {
            j++;
            avaiable--;
        }
        if (avaiable > room) {
            return false;
        }
    }
    return true;
}
console.log(book([1, 3, 5],[2, 5, 8],1))