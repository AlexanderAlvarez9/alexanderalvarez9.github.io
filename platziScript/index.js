const url = "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@";
let userName = "jhonalexanderalvarezromero";

const $tagUser = document.querySelector(".tagUser");
const $total = document.querySelector(".total");
const $puntos = document.querySelector(".puntos");
const resultado = document.getElementById("cursos");
// const $button = document.getElementById("searchUser");
// let $user = document.getElementById("user");
// let userName = $user.value;
const $hiddenCV = document.querySelector('.hiddenCV');
const $buttonCV = document.querySelector('.unhidde');
const $listCV = document.querySelector('.listCV');

$buttonCV.addEventListener('click', () => {
  if (!$hiddenCV.style.display) {
    $hiddenCV.style.display = "grid"
    document.querySelector('.CV').scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    $hiddenCV.style.display = ""
  }
});

async function searchInPlatzi() {
  const response = await fetch(`${url}${userName}`);
  if (!response.status.error) {
    let usersData = await response.json();
    usersData = usersData.userData;
    console.log(usersData);
    totalCursos(usersData);
  } else {
    alert("Usuario no encontrado");
  }
}
searchInPlatzi();
// button.addEventListener("click", searchInPlatzi(userName)); //El campo de texto deberia buscar

let totalCursos = function (usersData) {
  // arrayCourse.forEach(element => {}); // Pendiente usar foreach

  for (let i = 0; i < usersData.courses.length; i++) {

    //Ordenar Cursos por carrera
    usersData.courses.sort((a, b) => {
      if (a.career > b.career) {
        return 1
      }
      if (a.career < b.career) {
        return -1
      }
      return 0;
    })

    let url_curso = usersData.courses[i].url.substring(7, usersData.courses[i].url.length);

    resultado.innerHTML += `
<div class="card">
  <b>${i + 1}</b> - ID: ${usersData.courses[i].id}<br>
  <img class="mainImg" src="${usersData.courses[i].badge}" alt="Logo Curso" height="160"><br><br>
  Titulo: ${usersData.courses[i].title} <br><br>
  URL del curso: <a href="https://platzi.com${usersData.courses[i].url}" target="_blank">Link Curso</a> <br><br>
  Carrera: ${usersData.courses[i].career} <br><br>
  <a href="https://platzi.com${usersData.courses[i].diploma_link}" target="_blank">Certificado</a> <br><br>
  <button class="button ${i}">Codigo</button><br><br>
  <div class="spoiler ${i}">
    <div>
      <br>
      {<br>
      title: "${usersData.courses[i].title}",<br>
      img:
      "${usersData.courses[i].badge}",<br>
      desc:
      "Descripcion_del_Curso",<br>
      linkCert:
      "https://platzi.com${usersData.courses[i].diploma_link}",<br>
    show: true,
      <br>
      },<br><br></div>
    <a href="https://platzi.com/cursos${url_curso}" target="_blank">Descripcion</a><br>
    </>
</div>
        `;
  }
  $totalCursos = usersData;

  spoilers($totalCursos);
  wordCV($totalCursos);
};

function spoilers(valor) {

  $total.innerHTML += $totalCursos.courses.length;
  $puntos.innerHTML += $totalCursos.platzi_rank

  $tagUser.innerHTML += userName;

  let $button = document.querySelectorAll(".button");
  let $spoiler = document.querySelectorAll(".spoiler");

  for (let i = 0; i < $spoiler.length; i++) {
    $button[i].addEventListener("click", function () {
      $spoiler[i].classList.toggle("visible");
    });
  }
}

function wordCV(data) {

  for (let i = 0; i < data.courses.length; i++) {


    $hiddenCV.innerHTML += `
            <div class="listCV">
                <img class="courseImg"
                    src="${data.courses[i].badge}"
                    alt="Logo Curso">
                <p class="word courseName">${data.courses[i].title}</p>
                <p class="word courseEntity">Platzi</p>
            </div>
            `
  }
}