
  function book(arrival, departure , room) {
    arrival.sort();
    departure .sort();
    var i = j = current = 0;
    day= arrival.length;
    while (i < day && j < day) {
        if (arrival[i] < departure [j]) {
            i++;
            current++;
        }
        else {
            j++;
            current--;
        }
        if (current > room) {
            return false;
        }
    }
    return true;
}
console.log(book([1, 3, 5],[2, 6, 8],1))
console.log(book([1, 3, 5],[2, 4, 8],1))
