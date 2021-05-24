// 8kyu Crash Override

function aliasGen(first, last){
	// check if first character of each string is in dictionary
	// if not, return error string
	// if is, return hacker name
	
}

// parameters given: 2 strings (firstname, surnname)
// need to return one string that is either the hacker name or "yoru name must start with A-Z"

function aliasGen(first, last){
	if (firstName[first[0].toUpperCase()] && surname[last[0].toUpperCase()]) {
		return firstName[first[0].toUpperCase()] + ' ' + surname[last[0].toUpperCase()]
	}else {
		return "Your name must start with a letter from A - Z."
	}
}