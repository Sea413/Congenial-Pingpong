var kant ="Ping"
$(document).ready(function() {
$("form#question").submit(function(event) {

var gabe = parseInt($("input#gaben").val());
var appendText = [];
for (var i = 1; i <= gabe; i++) {
appendText.push(i);
}
//
for (var i = 1; i < appendText.length; i++) {
if (i % 3 ===0) {
  appendText[i-1]= "ping";
}
}
var new_array = appendText.concat();
// appendText = appendText.join("");
$("#sth").append(appendText + "<br>" );
event.preventDefault();
});
});
