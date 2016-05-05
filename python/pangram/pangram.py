def is_pangram(sentence):
	sentence = sentence.lower()
	checkString = "abcdefghijklmnopqrstuvwxyz"
	for letter in sentence:
		if letter in checkString:
			checkString= checkString.replace(letter, '')
	if checkString == '':
		return True
	else:
		return False
