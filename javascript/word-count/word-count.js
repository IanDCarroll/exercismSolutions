//still working on this

function Words() {};

Words.prototype.count = function(sentence) {

    var wordList = sentence.split(/\s/);
	//working

    var results = {};

    for (i = 0; i < wordList.length; i++) { 
	for (var word in Object.keys(results)) { //<--?
		console.log(word);
		if (word === wordList[i]) {
			results[word] += 1;
		} 
		else { results[wordList[i]] = 1; }	
	}
    }
    return results;
};

//console.log(Words.count("This is a thing."));
module.exports = Words;
