function Hamming() {
    this.compute = function(strandA, strandB) {
	var hamCount = 0;
	if (strandA.length != strandB.length) {
	    throw new Error("DNA strands must be of equal length.");
	}
	else {
	    var arrayA = strandA.split(""),
		arrayB = strandB.split("");
	    for (var i = 0; i < arrayA.length; i++) {
		if (arrayA[i] !== arrayB[i]) { hamCount += 1; }
	    }
	    return hamCount;
	}
    }
}

module.exports = Hamming;
