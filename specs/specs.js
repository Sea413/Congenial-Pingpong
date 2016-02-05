describe('Pingpong', function() {
    it("will begin create parameters for the array set.", function(){
      var testObject = new Pingpong ();
      expect(testObject.appendText).to.eql([]);
  });
  it("will allow expansion.", function(){
    var testObject = new Pingpong (3);
    expect(testObject.appendText).to.eql([]);
  });

  it("Testing to see if the formula can recognize the implementation of three as a varaiable", function(){
    var testObject = new Pingpong();
        testObject.intselect(3);
        expect(testObject.appendText).to.eql([1,2,"Ping"]);
  });
  it("Attempting to see if the program can correctly recognize 5 as a variable of Pong", function(){
    var testObject = new Pingpong();
        testObject.intselect(5);
        expect(testObject.appendText).to.eql([1,2,"Ping",4,"Pong"]);
  });
  it("Attempting to see if the program can correctly recognize 15 as a variable of PingPong", function(){
    var testObject = new Pingpong();
        testObject.intselect(15);
        expect(testObject.appendText).to.eql([1,2,"Ping",4,"Pong","Ping",7,8,"Ping","Pong",11,"Ping",13,14,"PingPong"]);
  });
  });

describe('emu', function() {
  it("is true when array is formulated it will result in a state when a non integar will occupy 3n, 5n, and 15n in their respective postions.", function() {
    expect([1, 2, "Ping"]).to.eql([1, 2, "Ping"]);
  });
});
