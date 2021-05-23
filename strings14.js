//8kyu Define a Card Suit


function defineSuit(card) {
	  let ind = deck.indexOf(card)
	  if (ind < 13) {
		return 'clubs'
	  }else if (ind < 26) {
	   return 'diamonds'
	  }else if (ind < 39) {
		return 'hearts'
	  }else{
		return 'spades'
	  }
	}
	
	
	/*
	if (card.includes('♣')) { return 'clubs'}
	if (card.includes('♦')) { return 'clubs'}
	if (card.includes('♥')) { return 'clubs'}
	if (card.includes('♠')) { return 'clubs'}
	*/

// parameters: what you're being given
// questions
// examples
// pseudocode