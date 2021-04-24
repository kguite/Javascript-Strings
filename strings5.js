//8kyu Sort and Star

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }


// the above solution uses the .sort() array method to arrange the array alphabetically.
// then, .split() divides the array into an ordered list of substrings
// finally, .join('***') puts the pieces back together, with *** between each letter.

// more reading about sort() method:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
