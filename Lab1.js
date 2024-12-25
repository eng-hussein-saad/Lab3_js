function alphabet_position(text) {
  text = text.toLowerCase();
  resultStringArray = [];
  for (var i = 0; i < text.length; i++) {
    var letterCode = text.charCodeAt(i);
    if (letterCode >= 97 && letterCode <= 122) {
      letterCode -= 96;
      resultStringArray.push(letterCode);
    }
  }
  resultString = resultStringArray.join(" ");
  return resultString;
}
console.log(alphabet_position("The sunset sets at twelve o' clock."));
