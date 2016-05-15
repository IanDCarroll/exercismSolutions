//in progress

function Gigasecond() {
    this.date = function(birthdate) {
	var msDate = Date.parse(birthdate),
	    msInGS = 100000000000,
	    aniversary = Date.toString(msDate + msInGS);
	return aniversary;
   }
};

module.exports = Gigasecond;
