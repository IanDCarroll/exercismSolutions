function Words() {};

Words.prototype.count = function(sentence) {
    sentence = sentence.toLowerCase()
		       .replace(/^\s+/,'')
		       .replace(/\s+$/,'');

    var wordList = sentence.split(/\s+/),
	results = Object.create(null);

    for (i = 0; i < wordList.length; i++) { 
	if (results[(wordList[i])]) {
	    results[(wordList[i])] += 1;
	} else { 
	    results[(wordList[i])] = 1; 
	}
    }
    return results;
};

module.exports = Words;

/* To pass a key into an object in JS:
 * (an equivalent to a pythonian 'dictionary')
 * 
 * var thing = {}; //Declare the variable
 * var putItIn = 'theGreatAnswer'; //Define the key
 * thing[(putItIn)] = 42;
 * console.log(thing); //==> { theGreatAnswer : 42 }
 *
 * Super Important! Use bracket notation [] 
 *		    NO dots!	thing.thisIsntGoingToWork;
 *		    		thing.(neitherIsThis);
 *				//==> throws error.
 *				thing.unlessThis_IS_theKey;
 *				//==> { unlessThis_IS_theKey : Undefined }
 *		    with no quotes. 
 *		    NOT: 	thing['oldKeyAccess'];
 *
 *		    but WITH parentheses in the brackets ()
 *
 *	thing[(newKey)] = newValue; 
 *	//==> { newKey : newValue }
 * 
 * What doesn't help 
 * with handling properties that exist on Object's prototype:
 *
 *  Converting the word (property) to a string.
 *	a. by passing object[String(word)]
 *	b. by modifying the word to "word". That just breaks everything.

 * What DOES help:
 *  Using Object.create(null) instead of {}.
 * 	This creates a JS object that does not inherit from 
 *	Object.Prototype. 
 *	Since it has NO methods, NO reserved words.
 */
