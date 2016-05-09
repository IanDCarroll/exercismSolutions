function DnaTranscriber() {
    this.toRna = function(dna) {
	var rna = "",
	    dnaRA = dna.split("");

	dnaRA.forEach(function(v) {
	    if (v === "G") { rna += "C"; }
    	    if (v === "C") { rna += "G"; }
	    if (v === "T") { rna += "A"; }
	    if (v === "A") { rna += "U"; }
	})
	return rna;
    }
}

module.exports = DnaTranscriber;
//this code might be solved more simply using RegExp. 
//Embarrased to say, but ATM I don't know enough about them to know if
//they'd be more appropriate or not.
