// USED TO ADD SWIMMERS TO THE DATABSE BY CHECKING TO SEE IF DATA HAS BEEN SENT OR NOT FROM THE ADD SWIMMER FORM AND POST THE ECHO FROM THE PHP SCRIPT.
$(document).ready(function() {
$("#sub").click(function() {
$.post(
$("#AddSwimmer").attr("action"),
$("#AddSwimmer :input").serializeArray(),
function(info) {
$("#result").html(info)
}
);

clearInput();
});

$("#AddSwimmer").submit(function() {
return false;
});
});



