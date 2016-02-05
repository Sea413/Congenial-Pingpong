function Pingpong (appendText){
  this.appendText = [];
}

Pingpong.prototype.intselect = function(valueinteger){
  for (var i = 1; i <= valueinteger; i++) {
    this.appendText.push(i);
}
  for (var i = 1; i <= this.appendText.length; i++) {
    if (i % 3 ===0) {
      this.appendText[i-1]= "Ping";
}
    if (i % 5 ===0) {
      this.appendText[i-1]= "Pong";

}
    if (i % 15 ===0) {
      this.appendText[i-1]= "PingPong";
    }
  }
}
$(document).ready(function() {
  $("form#question").submit(function(event) {
    var valueinteger = parseInt($("input#gaben").val());
    var sequence = new Pingpong();
    sequence.intselect(valueinteger);

    $("#sth").html(sequence.appendText + "<br>" );
    event.preventDefault();
  });
});
