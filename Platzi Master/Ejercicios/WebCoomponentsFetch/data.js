import './components/allCards.js'

const main = document.getElementById('main');

const getData = fetch('https://rickandmortyapi.com/api/character/')
    .then(res => {
        return res.json();
    })
    .then(character => {
        console.log(character.results);

        const el = document.createElement('all-cards');
        el.results = character.results;
        main.appendChild(el);
    })
    .catch(error => console.log(error));