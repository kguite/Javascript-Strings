// 8kyu Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    return x.split("").map(d => d >= 5?'1':'0').join("");
  }

  // First we have to split the string of digits into a series of strings with one digit in each.
  // then we use .map to make a new array
  // d is for digit
  // if d is greater than or equal to 5, then replace it with 1.
  // if d is not, then replace it with 0.
  // join the array back into one again.


  // further reading about .map:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map