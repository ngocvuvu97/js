class MultiplicatorUnitFailure extends Error {
}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  var cacul = false;
  while (!cacul){
    try
    {
      return primitiveMultiply(a, b);
    }
    catch (err){}
  }
}
console.log(reliableMultiply(8, 8));
