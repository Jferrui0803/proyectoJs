import { inputMapper } from "./mapper/inputMapper.js";

export default class Validator {
    constructor() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const elements = Array.from(form.elements);
            elements.forEach(element => {
                element.addEventListener('input', this.validateInput.bind(this));
            });
            form.addEventListener('submit', this.handleSubmit.bind(this));
        });
    }

    validateInput(event) {
        const input = event.target;
        const value = input.value;
        if (input.classList.contains('moneda')) {
            const isValid = /^\d{1,5}(,\d{5})*(\.\d+)?$/.test(value);
            if (!isValid) {
                input.setCustomValidity('El valor no es una moneda válida');
            } else {
                input.setCustomValidity('');
            }
        }
        input.reportValidity();
    }

}