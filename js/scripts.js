var dogwhistle = function(gabe){
  // var gabe = 3
return ((gabe % 3 == 0) || (gabe % 5 == 0)) || (gabe % 15 == 0);
};
var emu = function(cloneArray){
var cloneArray = appendText.slice()
return
};
$(document).ready(function() {
$("form#question").submit(function(event) {

var gabe = parseInt($("input#gaben").val());
var appendText = [];
for (var i = 1; i <= gabe; i++) {
appendText.push(i);
}
for (var i = 1; i <= appendText.length; i++) {
if (i % 3 ===0) {
  appendText[i-1]= "Ping";
}
if (i % 5 ===0) {
  appendText[i-1]= "Pong";
}
if (i % 15 ===0) {
  appendText[i-1]= "PingPong";
}
}
$("#sth").html(appendText + "<br>" );
event.preventDefault();
});
});
