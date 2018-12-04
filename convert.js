
let textArea1 = document.getElementById('textArea1');
let textArea2 = document.getElementById('textArea2');

let elem1 = document.createElement('h1');
let elem2 = document.createElement('b');

textArea1.oninput = function() {
    let regEx1 = /\#(\w+)\s$/;
    let regEx2 = /\*\*(.*)\*\*/;

    let getText1 = /(?<=\#)(\w+)(?=\s)/;
    let getText2 = /(?<=\*\*)(.*)(?=\*\*)/;

    textArea1.value = textArea1.value.replace(regEx1, () => {
        return textArea1.value.match(getText1)[0];
    });
    textArea1.value = textArea1.value.replace(regEx2, () => {
        return textArea1.value.match(getText2)[0];
    });
    textArea2.value = textArea1.value;
   // textArea2.appendChild('h1');
};


