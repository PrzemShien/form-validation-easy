'use strict';

var btn = document.addEventListener('submit', formValidator);

function formValidator(e){
    e.preventDefault();
    
    var okMsg = document.querySelector('#msg');
    let eInp = document.querySelector('#email').value;
    let bInp = document.querySelector('#date').value;
    let txtArea = document.querySelector('form textarea').value;
    
    const mailRegExp = /^\w+[.-]*\w[a-z\d]*@\w+[.-]*[a-z\d]*\.[a-z]{2,}$/;
    const testMAil = mailRegExp.test(eInp);
    
    const dateRegExp = /\d{4}-\d{2}-\d{2}/;
    const testDate = dateRegExp.test(bInp);
    
    let tabSpan = document.querySelectorAll('form span');
    console.log(tabSpan);
    for(let i =0; i < tabSpan.length; i++){
        tabSpan[i].style.color = "red";
    }
    okMsg.style.color = "green";
    
    if(!testMAil)   {tabSpan[0].innerText = "Niepoprawny email"}
    if(!testDate)   {tabSpan[1].innerText = "Niepoprawny format daty"}
    if(txtArea.length < 6){tabSpan[2].innerText = "Wpisano za mało znaków"}
    
    if(testMAil && testDate && txtArea.length > 6){okMsg.innerText = "Dziękujemy, Twoja wiadomość została przesłana. Odpowiedź wyślemy na maila: " + eInp}
}

