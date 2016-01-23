describe('dogwhistle', function() {
  it("is true when the input value is equal to three it will result in a ping result", function() {
    expect(dogwhistle(3)).to.equal(true);
  });

  it("is true when 5 is without a remainder it will apply a seperate conditional for the Pong Result", function() {
    expect(dogwhistle(5)).to.equal(true);
  });

  it("is true when 15 is provided as a value for the first time it will provide a reaminder of zero and create the png value", function() {
    expect(dogwhistle(15)).to.equal(true);
  });

  it("is true the wu tang clan has always been good", function() {
      expect(dogwhistle(5)).to.equal(true);
    });

describe('emu', function() {
    it("is true when array is formulated it will result in a state when a non integar will occupy 3n, 5n, and 15n in their respective postions.", function() {
        expect([1, 2, "Ping"]).to.eql([1, 2, "Ping"]);
      });
      it("is designed to generate experimental results", function() {
          expect(cloneArray[2]).to.eql([1, 2]);
        });
  });
});
