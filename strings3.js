//8kyu Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }

  // the return line reads like if "bool" is true, return 'yes' string, else return 'no' string. 

  // an easier to read version:

  function boolToWord( bool ){
    if(bool === true){
      const x = "Yes";
      return x
    } else {
      const x = "No";
      return x
    }
  }

  // examples of the ternary syntax in a similar case can be found here:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator (scroll down to conditional chains)