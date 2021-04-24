//8kyu Return Strings

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
    return "Hello, " + name + " how are you doing today?"
  }

// I used the above solution, which uses concatenation.  Some other examples:

function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }

  // this is a template literal, which uses backticks rather than quotation marks.


const greet = name => `Hello, ${name} how are you doing today?`;

// and this one uses both an arrow function AND a template literal.