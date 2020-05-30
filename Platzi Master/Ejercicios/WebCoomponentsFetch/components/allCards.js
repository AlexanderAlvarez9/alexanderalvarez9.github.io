import './character-card.js';

class allCards extends HTMLElement {

    set results(data) {
        this._info = data;
        this._render();
    }
    constructor() {
        super()

        this.attachShadow({ mode: 'open' });
    }

    _render() {
        console.log(this._info[0].image);
        this.shadowRoot.innerHTML = `
            ${this._info.map(character => `
            <style>
                margin-bottom: 25px;
            </style>
            <character-card name=${character.name} img=${character.image}>
                <p slot="gender">${character.gender}</p>
                <p slot="type">${character.type}</p>
            </character-card>
            `).join('')}
        `;
    }
}

customElements.define('all-cards', allCards)