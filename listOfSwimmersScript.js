$(document).ready( function() {
done();
});

function done() {
setTimeout( function() {
updates();
done();
}, 200);
}

function updates() {
$.getJSON("http://192.168.0.101/smallt/fetch.php", function(data) {
$("#listofswimmers").empty();
$.each(data.result, function(){
$("#listofswimmers").append("   Name: "+this['swimmerName']+"  Age: "+this['swimmerAge']);
});
});
}