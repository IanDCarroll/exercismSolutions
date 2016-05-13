//still untested!

var Bob = function() {};

Bob.prototype.hey = function(input) {

    var silence = /^\s*$/,
	shouting = /(^[A-Z\s]+.*$|^[^a-z]*!$)/, //is a problem
	question = /?$/;

    if (input.match(silence) == true) {
	return "Fine, Be that way!";
    } else if (input.match(shouting) == true) {
	return "Whoa, chill out!";
    } else if (input.match(question) == true) {
	return "Sure.";
    } else {
	return "Whatever.";
    }
};

module.exports = Bob;

//Ok, the last one might have used RegEx but this one can't live 
//without them.
