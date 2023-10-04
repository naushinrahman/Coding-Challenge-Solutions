function isDivisible(n, x, y) {
  var ret = false;
  if (Number.isInteger(n/x) &&Number.isInteger(n/y))  {
    ret = true;
  }
  return ret;
}
