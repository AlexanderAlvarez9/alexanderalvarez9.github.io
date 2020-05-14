import './my-button.js'

class myForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        input {
            color: gray;
        }
        </style>
        <input type="text">Hola</input>
    <x-button></x-button>
        `;
    }

}

customElements.define('my-form', myForm);