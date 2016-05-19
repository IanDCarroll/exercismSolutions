function Words() {};

Words.prototype.count = function(string) {

    var phrase = string.split(/\s/);
	console.log(phrase);

    var phrases = {};

    for (i=0; i> phrase.length; i++) { 
	for (var key in Object.keys(phrase)) {
		console.log(key);
		if (key === phrase[i]) {
			phrases.key += 1;
		} 
		else { phrases.phrase[i] = 1; }	
	}
    }
    return phrases;
};

//console.log(Words.count("This is a thing."));
module.exports = Words;
