function addChar(input, character) {
    if(input.value == null || input.value == "0")
        input.value = character
    else
        input.value += character
}
function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
val = input.value;
input.value = (input.value)/ 100+"%";
}
function compute(form) {
 
    form.display.value = eval(form.display.value);
  }

function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-"&&
            ch != "%") {
                alert("invalid entry!")
                return false
                }
            }
        }
        return true
}