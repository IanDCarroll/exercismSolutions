def to_rna(dnaString):
	outString = ''
	for letter in dnaString:
		if letter is 'G':
			outString += 'C'
		elif letter is 'C':
			outString += 'G'
		elif letter is 'T':
			outString += 'A'
		elif letter is 'A':
			outString += 'U'
	return outString

