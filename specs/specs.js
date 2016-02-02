describe('Pingpong', function() {
    this.timeout(700000000000000);
    it("will begin create parameters for the array set.", function(){
      var testObject = new Pingpong ();
      expect(testObject.appendText).to.eql([]);
  });
  it("will allow expansion.", function(){
    var testObject = new Pingpong (3);
    expect(testObject.appendText).to.eql([]);
  });

  it("Final testing.", function(done){
    var testObject = new Pingpong();
        expect(testObject.intselect(3)).to.eql([1,2,3]);
    //     setTimeout(function(done, 700000000000000){
    // });
  });
  });
  // });
  // describe('Pingpong', function() {
  // describe('#indexOf()', function() {
  // it("Further experimentation required.", function(){
  //   [1,2,3].indexOf(5).should.equal(-1);
  // });
  // });
  // });
  //   });
  // it("is true when 5 is without a remainder it will apply a seperate conditional for the Pong Result", function() {
  //   expect(dogwhistle(5)).to.equal(true);
  // });
  //
  // it("is true when 15 is provided as a value for the first time it will provide a reaminder of zero and create the png value", function() {
  //   expect(dogwhistle(15)).to.equal(true);
  // });
  //
  // it("is true the wu tang clan has always been good", function() {
  //     expect(dogwhistle(5)).to.equal(true);
  // });

describe('emu', function() {
  it("is true when array is formulated it will result in a state when a non integar will occupy 3n, 5n, and 15n in their respective postions.", function() {
        expect([1, 2, "Ping"]).to.eql([1, 2, "Ping"]);
  });
  });
// });
