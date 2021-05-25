//7kyu Split an Array

function split(arr, prop) {
	  // given an array of objects & a test property
	  // return an array of 2 arrays - 1st is truthy results
	  
	  // setting up my emptry return array of empty arrays
	  let sorted = [[],[]]
	  // iterate through arr
	  for (i=0; i<arr.length; i++) {
		//if the object in arr has a truthy prop value
		if (arr[i][prop]) {
		  //add to first index of sorted
		  sorted[0].push(arr[i])
		} else {
			//add to 2nd index of sorted
		  sorted[1].push(arr[i])
		}
	  }
	return sorted
	  
	  
	}