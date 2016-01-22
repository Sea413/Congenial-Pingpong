
$(document).ready(function() {
$("form#question").submit(function(event) {

var gabe = parseInt($("input#gaben").val());
var appendText = [];
for (var i = 1; i <= gabe; i++) {
appendText.push(i);
if (i % 3 === 0) {
  $("#panic").show();
 appendText[i] = ("Ping");
}
}
//
// var new_array = appendText.concat(); //Copy initial array
//
// for (var i = 1; i < gabe.length; i+3) {
//   new_array[i] = new_array[i-1] + appendText[i];
// }
// appendText = appendText.join("");
$("#sth").append(appendText + "<br>" );
event.preventDefault();
});
});
