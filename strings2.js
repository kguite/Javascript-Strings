//8kyu Reverse Strings

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!


function reverse(string){
    return string.split(' ').reverse().join(' ');
  }


  // explanation: .split(' ') splits the string into an array of substrings. so like "hello world" turns into "hello", "world"
  // then we use .reverse() to flip the order of the words to "world", "hello"
  // this leaves us stuck with the comma between, and two separate strings that we want to be one string.
  // join(' ') is an array method, and joins the disparate strings into one.  
 