const template = document.createElement('template');

template.innerHTML = `
        <div>
            <img />
            <div class="character-card">
                <h3>Nombre</h3>
                <p> <slot name="gender"></slot></p>
                <p> <slot name="type"></slot></p>
            </div>
        </div>
    `;

class characterCard extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('img').src = this.getAttribute('img');
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

    }
}

customElements.define('character-card', characterCard)