//MAKING THE SCRIPT DOCUMENT READY
$(document).ready( function() {
done();
});
// SETTING A TIMER FOR WHEN IT SHALL UPDATE THE LIST, GIVING A CONTINUS UPDATE TO THE LIST OF SWIMMERS
function done() {
setTimeout( function() {
updates();
done();
}, 200);
}
//PULLING THE DATA FROM THE PHP SCRIPT CONECTED TO THE SQL DATABSE AND BRING THE DATA BACK IN JON CONATNOR , THEN BEING DISPLYED IN THE LIST OF SWIMMERS IN THE FORMAT STATED BELOW BEING NAME AS THE SWIMMERS NAME AND AGE AS THIER AGE.
function updates() {
$.getJSON("http://192.168.0.101/smallt/fetch.php", function(data) {
$("#listofswimmers").empty();
$.each(data.result, function(){
$("#listofswimmers").append("   Name: "+this['swimmerName']+"  Age: "+this['swimmerAge']);
});
});
}