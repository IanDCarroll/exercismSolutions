def distance(sampleA, sampleB):
	counter = 0
	if len(sampleA) != len(sampleB):
		return "ERROR! WHAT ARE YOU DOING YOU NINNY!?"
	for nukeA, nukeB in zip(sampleA, sampleB):
		if nukeA != nukeB:
			counter += 1
	return counter
