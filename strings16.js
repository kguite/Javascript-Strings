// Character Frequency

function charFreq(message) {
	 let counts ={}
	 for (let i=0; i<message.length; i++) {
	   let curChar = message[i]
	   if (counts[curChar]) {
		 counts[curChar]++
	   }else{
		 counts[curChar] = 1
	   }
	 }
	  return counts
	}