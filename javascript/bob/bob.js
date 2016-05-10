var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (input) {
	return "Whatever.";
    } else {
	return "Fine. Be that way!";
    }
};

module.exports = Bob;

//Ok, the last one might have used RegExp but this one can't live 
//without them.
