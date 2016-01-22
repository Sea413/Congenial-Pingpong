
$(document).ready(function() {
$("form#question").submit(function(event) {

var gabe = parseInt($("input#gaben").val());
var appendText = [];
for (var i = 1; i <= gabe; i++) {
appendText.push("");

var new_array = appendText.concat(); //Copy initial array

for (var i = 1; i < appendText.length; i++) {
  new_array[i] = new_array[i-1] + appendText[i];
}
appendText = appendText.join(" ");
$("#sth").append(new_array + "<br>" );
event.preventDefault();
});
});
