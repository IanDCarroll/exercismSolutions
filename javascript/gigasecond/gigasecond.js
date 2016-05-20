

function Gigasecond(startDate) {

    this.date = function() { 
	var startDateMS = Date.parse(startDate),
	    oneGSinMS = 1000000000000,
	    gsAnivMS = startDateMS + oneGSinMS,
	    gsAniv = new Date(gsAnivMS);
	return gsAniv;
    }
   
};

module.exports = Gigasecond;


/* The JS Date function reckons time in miliseconds
 * from 1/1/1970 00:00:000.
 * 
 * But when a date function is passed as an arg 
 * it passes a string.
 * 
 * Date.parse() will take a string and convert it to ms.
 *
 * We then add the requisite billion seconds 
 * (as a trillion ms) to that number.
 *
 * new Date() will take our new ms number and ouala! 
 * A new date string with the gigasecond aniversary.
 */
