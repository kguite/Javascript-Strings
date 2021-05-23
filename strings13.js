// Polish Alphabet


ffunction correctPolishLetters (string) {
	  const diaNorm = {
	'ą' : 'a',
	'ć' : 'c',
	'ę' : 'e',
	'ł' : 'l',
	'ń' : 'n',
	'ó' : 'o',
	'ś' : 's',
	'ź' : 'z',
	'ż' : 'z'
	}
	return string.split('').map( x => diaNorm[x] ? diaNorm[x] : x).join('')
	}
	