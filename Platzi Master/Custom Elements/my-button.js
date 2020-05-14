class xbutton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        button {
            background-color: blue;
            border: none;
            color: white;
            height: 3em;
            box-shadow: 0 0 4px 4px lightgreen;
            border-radius: 2em;
        }
        </style>

        <button>Soy Un Boton</button>
        `;
    }

}

customElements.define('x-button', xbutton);