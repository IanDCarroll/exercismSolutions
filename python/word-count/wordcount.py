#passes the first 3 tests

def word_count(sentence):
    sentence.strip('\s+')
    sentence.lower()

    wordList = list(sentence.split())
    results = {}

    for i in range(0,len(wordList)):
	if wordList[i] in results:
	    results[(wordList[i])] += 1
	else:
	    results[(wordList[i])] = 1
    return results
