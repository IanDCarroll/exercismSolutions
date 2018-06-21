class Gigasecond {
  constructor(inputDate) {
    this.inputMiliseconds = Date.parse(inputDate);
  }

  date() {
    return new Date(this.gigasecondize(this.inputMiliseconds));
  }

  gigasecondize(unixMiliseconds) {
    const oneTrillionMiliseconds = 1000000000000;
    return unixMiliseconds + oneTrillionMiliseconds;
  }
}

module.exports = Gigasecond;


/*
TDD

1. Write tests
2. Fail test
3. Write code
4. Test 1

*/
