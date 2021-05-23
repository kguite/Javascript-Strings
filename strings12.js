// Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
	// halve each shark speed if dolphin
	  if (dolphin) {
		sharkSpeed *= .5
	  }
	  return (pontoonDistance/youSpeed >= sharkDistance/sharkSpeed) ? 'Shark Bait!' : 'Alive!'
	}
	
	