//8kyu Is there a Vowel In there?
//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

//If they are, change the array value to a string of that vowel.

// Return the resulting array.
	
	function isVow(a){  // function name, array
		  for (let i=0, l=a.length; i<l; ++i) // for loop to iterate through the array
		  {
			let char = String.fromCharCode(a[i]) // takes the charcode and turns it into a string
			if ('aeiou'.indexOf(char) !== -1) //if 'aeiou', return the character code for that char
			a[i] = char; //each array iteration is now the char variable on line 11
		  }
		  
		  return a; // return the resulting array
		}
		
		
		// references: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
		
		// https://www.w3schools.com/jsref/jsref_indexof.asp#:~:text=The%20indexOf()%20method%20returns,at%20the%20lastIndexOf()%20method.

		