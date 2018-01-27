'use strict';

(function(){

    function Validate(form, err){
        this._form = document.querySelector(form) || document.querySelector('form');
        this._error = document.querySelector(err) || document.querySelector('#err');
    
        this._assEven();
    }
    
    Validate.prototype._assEven = function(){
        this._form.addEventListener('submit', this._validateFields.bind(this), true);
    }
    
    Validate.prototype._validateFields = function(e){
        e.preventDefault();
        this._errors = [];
        this._error.innerHTML = "";
        console.log(e.target[0]);
        
        if (!e.target[0].value) {
            this._addError('Uzupełnij pole email');
        }

        this._maiRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (e.target[0].value && !this._maiRegExp.test(e.target[0].value)) {
            this._addError('Musi mieć znaki specjalne  @ i com lub pl');
        }
         if (!e.target[0].value) {
            this._addError('Uzupełnij pole mail');
        }
         if (this._errors.length > 0) {

                this._textErorer = 'Pojawiły się błędy ';

         }
        
    Validate.prototype._addError = function (err) {
        this._errors.push(err);
        this._show();
    }
    Validate.prototype._show = function () {
        this._messageError = '';
        for (let i in this._errors) {
            this._messageError += `${this._errors[i]} <br> ${this._textErorer} <br>`;
        }
        this._textErorer = (this._errors.length > 1) ? 'Wystąpił błąd ' : 'Wystąpił błędy ';
        this._errorHTML.innerHTML = this._messageError;
        console.log(this._textErorer);
    }
    }
    new Validate('form');
    
})();