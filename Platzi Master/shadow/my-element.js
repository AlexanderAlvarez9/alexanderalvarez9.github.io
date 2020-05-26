const template = document.createElement('template');
template.innerHTML = `
    <style>
    h1 {
        text-transform: uppercase;
        color: blue;
    }
    p {
        font-size: 0.7em;
    }
    </style>
    <section>
        <img id="pic" />
        <h1> <slot name="title"></slot> </h1>
        <p class="pp"> <slot name="subtitle"></slot> </p>
    </section>
`;


class myElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode
            (true));

        this.shadowRoot.getElementById('pic').src = this.getAttribute('imagen')
    }
}

customElements.define('my-element', myElement)