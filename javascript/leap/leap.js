class leap(year) { 
    this.isLeap = function() {

	return ((year % 400 === 0)||(year % 4 === 0));

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
 * 7. Additional refactoring with Alex Caruntu @ Star West conference.
 *      It never occured to me that just using return will return true, 
 *      and otherwise return false. This really simplified the function!
 *      Thanks Alex! Great pairing with you!
 */
