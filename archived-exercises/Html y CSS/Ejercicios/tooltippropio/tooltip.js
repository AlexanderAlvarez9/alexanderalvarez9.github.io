let tooltip1 = document.querySelector('.tooltip1');

let tooltip1h = document.querySelector('.tooltip1h');
let tooltip3h = document.querySelector('.tooltip3h');

let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');

input3.addEventListener("focus", function () { tooltip3h.classList.add('unhidde')} );
input3.addEventListener("blur", function () { tooltip3h.classList.remove('unhidde')} );

//Modal

let modal = document.querySelector('.modal');
let buton = document.querySelector('.modalButton');

buton.onclick = function () {
    // buton.dispatchEvent(new Event('click'));
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

//Gato

input3.addEventListener("change", gato);

function gato() {
    if (input3.value === 'borrar') {
        input2.value = 'gato'
    }
}