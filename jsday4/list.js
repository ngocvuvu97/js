// arrayToList
function arrayToList(array) {
    let num = array.shift();

    if (!num ) {
        return null;
    }
    let res = new Object({
        value: num,
        rest: arrayToList(array)
    })
    return res;
}
// listToArray
let result = [];
function listToArray(array1) {
    result.push(array1.value);
    if (!array1.rest) {
        return;
    } else {
        listToArray(array1.rest);
    }
    return result;
}

//console.log(listToArray(arrayToList([1, 2, 3,4])))

// prepend
function prepend(num, obj) {
    if (!obj) {
        return new Object({
            value: num,
            rest: null
        })
    }
    return rest = {
        value: num,
        rest: obj
    }
}

//console.log(prepend(10, prepend(20, null)));