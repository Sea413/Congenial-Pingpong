function myFunction() {
    var elmnt = document.createElement("li");
    var textnode = document.createTextNode("Water");
    elmnt.appendChild(textnode);

    var item = document.getElementById("myList");
    item.replaceChild(elmnt, item.childNodes[2]);
}


$(document).ready(function() {
$("form#question").submit(function(event) {

var gabe = parseInt($("input#gaben").val());
var appendText = [];
for (var i = 1; i <= gabe; i++) {
$("#sth").prepend( i + "<li>" );
}
// function myFunction() {
//     var elmnt = document.createElement("li");
//     var textnode = document.createTextNode("Water");
//     elmnt.appendChild(textnode);
//
//     var item = document.getElementById("myList");
//     item.replaceChild(elmnt, item.childNodes[0]);
// }

// if (i % 3 === 0) {
//       var tyrion = document.createElement("li");
//       var ned = document.createTextNode("Ping");
//       tyrion.appendChild(ned);
//
//       var item = document.getElementById("sansa");
//       item.replaceChild(tyrion, item.childNodes[3]);
   // appendText.push(i);
// }
// var trogdor = i.replace("ping")

// if (i % 3 === 0) {
// $("#sth").prepend( i.replace("ping") + "<br>" );
// }


// console.log(appendText);
//
// var new_array = appendText.concat(); //Copy initial array
//
// for (var i = 1; i < appendText.length; i++) {
//   new_array[i] = new_array[i-1] + appendText[i];
// }
//
// console.log(new_array);

//Out here we call the append once
//Since we defined our variable as an array up there we join it here into a string
// appendText = appendText.join(" ");
// $("#sth").append(new_array + "<br>" );

event.preventDefault();
});
});
