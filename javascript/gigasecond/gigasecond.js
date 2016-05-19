//in progress

function Gigasecond(date) {

    this.date = function() { 
	var niceName = Date.parse(date),
	    msInGS = 1000000000000,
	    aniversary = niceName + msInGS,
	    outDamnSpot = new Date(aniversary);
	return outDamnSpot;
    }
   
};

//console.log(Gigasecond(new Date(Date.UTC(2015, 8, 14))));
module.exports = Gigasecond;
