function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN < toN) {
    return toN + sum(fromN, toN - 1);
    /*
    sum(3, 7) example:
    a) because 3 < 7, returns 7 (and makes our toN be 7-1 for the next call)
    b) because 3 < 6, returns 6 (and makes our toN be 6-1 for the next call)
    c) because 3 < 5, returns 5 (and makes our toN be 5-1 for the next call)
    d) because 3 < 4, returns 4 (and makes our toN be 4-1 for the next call)
    e) because ! 3 < 3, returns 3 (this final call goes direct to our base case and stops; returning 3)
    7 + 6 + 5 + 4 + 3 = 25
    */
  } else {
    //base case: when the function does not need to call itself anymore, it will just return toN
    return toN;
  }
}

module.exports = sum;
