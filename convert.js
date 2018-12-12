 let regEx1 = /#(\w+)/g;
 let regEx2 = /\*\*(\w+)\*\*/g;

 let getText1 = /(?<=#)(\w+)(?=\s)/g;
 let getText2 = /(?<=\*\*)(\w+)(?=\*\*)/g;

let regEx = /(#(\w+))|(\*\*(\w+)\*\*)/g;
let getText = /((?<=#)(\w+)(?=\s))|((?<=\*\*)(\w+)(?=\*\*))/g;


let textArea1 = document.getElementById('textArea1');
let textArea2 = document.getElementById('textArea2');

let textA1;
let textA2;

textArea1.oninput = function() {

  textArea2.innerHTML = textArea1.value;

  textA1 = textArea1.value;
      textA1 = textA1.replace(regEx1, () => {
          return `<h1>${textA1.match(getText1)}</h1>`;
      });

  textArea2.innerHTML = textA1;

  // textArea2.innerHTML = textArea2.value.replace(getText1, (item) => {
  //   return `<h1>${item}</h1>`;
  // });
  //
  // textArea2.innerHTML = textArea2.value.replace(getText2, (item) => {
  //   return `<b>${item}</b>`;
  // });
  // textArea2.value = textArea2.value.replace(regEx1, () => {
  //   return `<h1>${textArea2.value.match(getText1)[0]}</h1>`;
  // });
  //
  // textArea2.value = textArea2.value.replace(regEx2, () => {
  //   return `<b>${textArea2.value.match(getText2)[0]}</b>`;
  // });

};