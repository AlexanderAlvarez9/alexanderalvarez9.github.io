class myTitle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        h1 {
            color: green;
        }
        </style>

        <h1>Hola desde un H1</h1>
        `;
    }

}

customElements.define('my-title', myTitle);