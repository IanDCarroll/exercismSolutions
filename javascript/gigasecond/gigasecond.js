//in progress

function Gigasecond() {
    //The test suite is passing a date object as the argument for birthdate.
    //I was hoping that object would evaluate itself to a usable number.
    //but that's not how JS works. Returns NaN.
    this.date = function(birthdate) {
	//write something that can take the date object 
	//and get it's ms value.
	var msInGS = 100000000000,
	    aniversary = birthdate + msInGS;
	return aniversary;
   }
};

module.exports = Gigasecond;
