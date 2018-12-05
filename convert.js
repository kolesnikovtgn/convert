
let textArea1 = document.getElementById('textArea1');
let textArea2 = document.getElementById('textArea2');

textArea1.oninput = function() {
    let regEx1 = /\#(\w+)\s$/;
    let regEx2 = /\*\*(.*)\*\*/;

    let getText1 = /(?<=\#)(\w+)(?=\s)/;
    let getText2 = /(?<=\*\*)(.*)(?=\*\*)/;

    textArea1.value = textArea1.value.replace(regEx1, () => {
        return `<h1>${textArea1.value.match(getText1)[0]}</h1>`;

    });
    textArea1.value = textArea1.value.replace(regEx2, () => {
        return `<b>${textArea1.value.match(getText2)[0]}</b>`;
    });

    textArea2.innerHTML = textArea1.value;
};

