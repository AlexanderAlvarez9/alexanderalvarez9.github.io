// alert("BIENVENIDOS A FISIOTERAPIA");

function confirmacion() {
    return confirm("Quieres ir a la pagina de neurología?")
}

function confirmacion() {
    return confirm("Quieres ir a la pagina de reumatología?")
}

let img = document.querySelectorAll(".img");

img[0].style.display = "initial";

img.addEventListener('click', () => {
    this.changeSlide();
});

for (let i = 0; i < array.length; i++) {
    
}

function dot1() {
    img[0].style.display = "initial";
    img[1].style.display = "none";
    img[2].style.display = "none";
    img[3].style.display = "none";
}

function dot2() {
    img[0].style.display = "none";
    img[1].style.display = "initial";
    img[2].style.display = "none";
    img[3].style.display = "none";
}

function dot3() {
    img[0].style.display = "none";
    img[1].style.display = "none";
    img[2].style.display = "initial";
    img[3].style.display = "none";
}

function dot4() {
    img[0].style.display = "none";
    img[1].style.display = "none";
    img[2].style.display = "none";
    img[3].style.display = "initial";
}
