function leap(year) { 
    this.isLeap = function() {

	if (year % 400 === 0) { return true; } 
	else if (year % 100 === 0) { return false; } 
	else if (year % 4 === 0) { return true; }
	else { return false; }

    }
}

module.exports = leap;

/* What I've learned:
 * 1. Object orientation: The test expects it, so I'll need to wrap 
 *	functions in objects using .prototype or this. 
 * 2. module.exports = object is VERY important here.
 * 3. return needs to be in the body of the if statement otherwise 
 *	it doesn't pass. It can't just be at the end of the function.
 * 4. It's actually simpler to not use a variable and just return true.
 * 5. The argument goes in the uppermost layer of the object.
 *	The this function only needs ().
 * 6. Most of this is thanks to seeing a successful example 
 * 	by https://github.com/christinejavier. Thanks Christine!
 */
