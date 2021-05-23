//5kyu Moving Zeros to the End

var moveZeros = function (arr) {
	  return arr.filter(x=>x!==0).concat(arr.filter(x=>x===0))
	}
	
	