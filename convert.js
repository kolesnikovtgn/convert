// let regEx1 = /#(\w+)/g;
// let regEx2 = /\*\*(\w+)\*\*/g;
//
// let getText1 = /(?<=#)(\w+)(?=\s)/g;
// let getText2 = /(?<=\*\*)(\w+)(?=\*\*)/g;
//
// let regEx = /(#(\w+))|(\*\*(\w+)\*\*)/g;
// let getText = /((?<=#)(\w+)(?=\s))|((?<=\*\*)(\w+)(?=\*\*))/g;

let textArea1 = document.getElementById('textArea1');
let textArea2 = document.getElementById('textArea2');

let text;

textArea1.oninput = function() {

  text = textArea1.value.replace(/\*\*.+?\*\*/g, `<b>$&</b>`).replace(/\*\*/g,'');
  text = text.replace(/#.+?[\s,\n]/g, `<h1>$&</h1>`).replace(/<h1>#/g,'<h1>');
  text = text.replace(/\n/g, '<br>');

  textArea2.innerHTML = text;
};