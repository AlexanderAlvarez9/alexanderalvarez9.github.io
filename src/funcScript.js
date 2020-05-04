var boton = document.getElementById("botonmenu");
var menu = document.querySelector(".menu");
var menub = boton.addEventListener("click", addClassQS);

function addClassQS() {
  boton.style.display = "none";
  menu.style.display = "block";
  // borar todo lo de is-active
}

window.onclick = function (event) {
  if (event.target == menu) {
    menu.style.display = "none";
    boton.style.display = "block";
  }
};

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  menu.style.display = "none";
  boton.style.display = "block";
};

let cursos = [
  {
    title: "Curso de Frontend Developer",
    img:
      "https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png",
    desc:
      "Domina las bases de HTML y CSS. Define la arquitectura de tu código y construye un sitio web usando componentes estáticos. Maqueta las pantallas principales de tu página web. Agrega diseño responsivo y usa preprocesadores para optimizar tu código CSS. ¡Conviertete en Frontend Developer con Pla",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1640-frontend-developer/diploma/detalle/",
  },
  {
    title: "Curso de Prework: Buenas Prácticas y Entorno de Desarrollo",
    img:
      "https://static.platzi.com/media/achievements/badge-prework-da6b0493-9908-40f3-ad53-f5d330b995b8.png",
    desc:
      "Comienza tus proyectos de desarrollo para JavaScript configurando un entorno de desarrollo cómodo y adaptado a tus necesidades. Empieza por la herramienta más poderosa para un desarrollador: la terminal. Aprenderás a instalarla, ejecutar comandos y compilar código. Haz parte del trabajo colaborativo entre desarrolladores configurando Github, creando repositorios remotos, y aprendiendo a hacer push y pull.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1650-prework/diploma/detalle/",
  },
  {
    title: "Curso de Fundamentos de JavaScript",
    img:
      "https://static.platzi.com/media/achievements/badge-fundamentos-javascript-61c15bdf-0a83-4aed-8537-b4753e4071e1.png",
    desc:
      "JavaScript es un lenguaje de programación que se trabaja desde el navegador. Construye programas, conoce el entorno, los condicionales y las estructuras repetitivas. Aprende cuáles son y cómo se declaran las variables y las funciones de JS.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1339-fundamentos-javascript/diploma/detalle/",
  },
  {
    title: "Curso de Desarrollo Web Online",
    img:
      "https://static.platzi.com/media/achievements/1350-09ddb033-354b-4c0c-84a4-56cbb71d0b08.png",
    desc:
      "Desarrolla tu propia página web con HTML5 y CSS3. Crea un sitio web para tu producto, personalízalo e inicia tu carrera para ser un Frontend profesional.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1350-html5-css3/diploma/detalle/",
  },
  {
    title: "Curso de HTML y CSS",
    img:
      "https://static.platzi.com/media/achievements/badges-html-css-b0a71550-d5e7-4e27-aca2-f09f1321a517.png",
    desc:
      "Aprende a crear sitios web con HTML y CSS. Profundiza en el desarrollo y personalización de páginas web navegables, intuitivas y a la medida de tus necesidades. Crea tus primeros proyectos con Platzi.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1492-html-css/diploma/detalle/",
  },
  {
    title: "Curso de CSS Grid Layout",
    img:
      "https://static.platzi.com/media/achievements/1229-dbff8a06-bcca-48e9-98e3-1fd76d6216f3.png",
    desc:
      "El módulo CSS Grid Layout nos permite generar distribuciones del contenido en nuestros sitios web de forma eficiente. Controla esta estructura bidimensional de filas y columnas fácilmente con propiedades de CSS logrando un mejor flujo que el que se tiene al utilizando otras propiedades de CSS",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1229-css-grid-layout/diploma/detalle/",
  },
  {
    title: "Curso de Responsive Design",
    img:
      "https://static.platzi.com/media/achievements/1362-87c8ad3d-a50d-41a2-b023-ad838594e1c9.png",
    desc:
      "Maqueta aplicaciones con diseño web adaptable. Adapta tus sitios para que funcionen en cualquier pantalla, dispositivo y resolución con HTML5 y CSS3 y genera la mejor experiencia para tus usuarios con Responsive Design.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1362-responsive-design/diploma/detalle/",
  },
  {
    title: "Curso de jQuery a JavaScript",
    img:
      "https://static.platzi.com/media/achievements/1316-718fb32b-2ab6-4042-a25b-ac2169e05cc3.png",
    desc:
      "Aprende a pasar código de jQuery a JS. Crea páginas dinámicas y animaciones en muy poco tiempo. Optimiza tu código jQuery y programa scripts de forma fácil y rápida con Javascript.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1316-jquery-js/diploma/detalle/",
  },
  {
    title: "Curso profesional de Git y GitHub",
    img:
      "https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png",
    desc:
      "Deja de versionar tus proyectos usando tu propio sistema de control de versiones. Mejor usa Git el Sistema de control de versiones por excelencia que utiliza la industria, aprende a gestionar tus proyectos alojándolos en Github. Domina Git y Github de cero a avanzado.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1557-git-github/diploma/detalle/",
  },
  {
    title: "Curso de Programación Orientada a Objetos: POO",
    img:
      "https://static.platzi.com/media/achievements/badges-poo-513deb20-a5bd-40a7-b97a-c36dc772d512.png",
    desc:
      "La misión: lograr que la virtualidad sea idéntica a la realidad. El elegido para esta tarea: tú. Sé parte de la generación que logra cambiar el mundo a través de ideas innovadoras, porque la diferencia entre ser testigo del cambio y ser parte de él comienza con Platzi.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1474-oop/diploma/detalle/",
  },
  {
    title: "Curso de Programación Básica",
    img:
      "https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png",
    desc:
      "Programa desde cero, domina Javascript, entiende HTML y aprende de algoritmos. Sí, desde cero. Entenderás la lógica del código, cómo piensan los programadores y cómo programar juegos, proyectos y hasta robots y electrónica. Aprender a programar no es fácil, pero Platzi lo hace efectivo.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1050-programacion-basica/diploma/detalle/",
  },
  {
    title: "Curso de Fundamentos de Ingeniería de Software",
    img:
      "https://static.platzi.com/media/achievements/badge-ing-software-2017-18f503fd-36bd-42d8-b1a1-492865659687.png",
    desc:
      "Comienza tu proyecto aprendiendo las bases de la ingeniería de software. En este curso podrás entender cómo funcionan las bases de la electrónica, los diferentes sistemas operativos y las redes que te permiten usar Inter",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1098-ingenieria/diploma/detalle/",
  },
  {
    title: "Curso de Introducción a la Terminal y Línea de Comandos",
    img:
      "https://static.platzi.com/media/achievements/badges-terminal-c9ee432b-2598-4e94-88d8-0a30842ef886.png",
    desc:
      "Explora la terminal y optimiza la navegación y ejecución de programas en sistemas operativos Unix. Conociendo y dominando la terminal, podrás invocar y ejecutar programas, crear directorios de los mismos y navegar en ellos de una manera veloz y eficiente.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1748-terminal/diploma/detalle/",
  },
  {
    title: "Introducción a Terminal y Línea de Comandos 2019",
    img:
      "https://static.platzi.com/media/achievements/1276-62e97e39-63d1-4139-b299-fc5eb65a9905.png",
    desc:
      "Explora la terminal y optimiza la navegación y ejecución de programas en sistemas operativos Unix. Conociendo y dominando la terminal, podrás invocar y ejecutar programas, crear directorios de los mismos y navegar en ellos de una manera veloz y eficiente.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1276-terminal/diploma/detalle/",
  },
  {
    title: "Curso de Inglés Básico",
    img:
      "https://static.platzi.com/media/achievements/badge-basico-ingles-e073f711-763d-4129-badc-5e4baa78b225.png",
    desc:
      "Aprende inglés desde cero. Entiende conceptos básicos y construye oraciones simples, enriquece tu vocabulario y da el primer paso en el desarrollo de tus habilidades en el idioma.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1358-ingles-basico/diploma/detalle/",
  },
  {
    title: "Curso de Inglés Básico: Conversación",
    img:
      "https://static.platzi.com/media/achievements/1371-db5ea3c7-4ac9-4b61-b786-9346ebb3fc7f.png",
    desc:
      "Aprende inglés desde cero. Fortalece tus habilidades comunicativas para mantener conversaciones efectivas en inglés.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1371-ingles-conversacion/diploma/detalle/",
  },
  {
    title: "Curso de Marca Personal",
    img:
      "https://static.platzi.com/media/achievements/1220-da04fca8-8561-40ce-a678-3585bde8d899.png",
    desc:
      "Tener una marca personal es fundamental para tu desarrollo profesional. Construir un portafolio de proyectos y fortalecer tu presencia online te ayudará a resaltar para ampliar tus oportunidades laborales, conseguir un mejor empleo o crear tu propio negocio.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1220-marca-personal/diploma/detalle/",
  },
  {
    title: "Curso de Computación Básica",
    img:
      "https://static.platzi.com/media/achievements/badge-computacion-basica-7bbb6f8a-04e3-4af2-82f2-8b8f2932ba04.png",
    desc:
      "¿Eres principiante y quieres tener las bases para manejar tu computadora de manera autónoma? Inicia en el mundo de la computación y aprende a instalar programas en Windows 10. Envía correos, gestiona tu seguridad e identifica las partes básica de una computadora.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1741-computacion-basica/diploma/detalle/",
  },
  {
    title: "Curso de Finanzas Personales",
    img:
      "https://static.platzi.com/media/achievements/badge-finanzas-personales-af9971ca-d6ce-403c-a940-8ecfd0de71f3.png",
    desc:
      "Tomar decisiones económicas responsables e informadas es primordial. En este curso conocerás las herramientas para poder tener control de tus finanzas y tener una mejor planeación y proyección de tus recursos.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1190-finanzas/diploma/detalle/",
  },
  {
    title: "Curso de Introducción a la Edición con Premiere",
    img:
      "https://static.platzi.com/media/achievements/badges-introduccion-edicion-premiere--8a48cb73-1bfd-487c-a741-15fd8b1796e0.png",
    desc:
      "Conoce las mejores técnicas de edición para cada tipo de video. Crea piezas que te permitan contar tu mundo y mil mundos más en imágenes y sonidos. Domina el mundo del montaje creativo a partir de los comandos y funciones que ofrece Premiere.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1190-finanzas/diploma/detalle/",
  },
  {
    title: "Curso de Estrategias para Aprender en Línea Efectivamente",
    img:
      "https://static.platzi.com/media/achievements/badge-estrategias-aprender-enlinea-df2bec85-990c-4afb-964c-8fb2dfbd1c2e.png",
    desc:
      "Todos los cerebros funcionan diferente ¿cómo aprende el tuyo?. En este curso aprenderás a identificar tus fortalezas cognitivas para mejorar tu rendimiento académico. Descubrirás tu estilo de aprendizaje y pondremos en práctica técnicas para estimular tu inteligencia, atención y memoria.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1190-finanzas/diploma/detalle/",
  },
  {
    title: "Curso de Comunicación Online con Slack ",
    img:
      "https://static.platzi.com/media/achievements/badges-comunicacion-slack-a9bd2f28-82f2-4fef-8d67-6cec70724d94.png",
    desc:
      "Mejora el ritmo de trabajo de tu equipo con Slack, una herramienta de comunicación ampliamente utilizada que te permite potenciar la transformación digital de tu empresa. Aprovecha la agilidad de la mensajería instantánea y los recursos de las redes sociales para optimizar tiempo y recursos.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1399-slack/diploma/detalle/",
  },
];

var cursohtml = document.getElementById("cursosid");

function construyeCursos() {
  for (let i = 0; i < cursos.length; i++) {
    cursohtml.innerHTML += `<article class="event">
                                    <figure class="event-imageContainer">
                                        <img class="event-image" src="${cursos[i]["img"]}" rel="noreferrer" alt="Imagen Curso" height="200">
                                    </figure>
                                    <div class="event-details">
                                        <h3 class="event-title">${cursos[i]["title"]}</h3>
                                        <p class="event-description">${cursos[i]["desc"]}</p>
                                        <a class="event-url" target="_blank" rel="noreferrer" href="${cursos[i]["linkCert"]}">Ver Certificado</a>
                                    </div>
                                </article>`;
  }
}

construyeCursos();

const $share = document.querySelector("#share");
if ("share" in navigator) {
  $share.addEventListener("click", share);
  function share() {
    navigator
      .share({
        title: "Comparte mi Portafolio",
        text: "Portafolio de Alexander Alvarez en GitHub",
        url: "https://darkmefisto9.github.io/",
      })
      .then(() => {
        console.log("Gracias por Compartir");
      })
      .catch(() => {
        console.log(
          "Error al compartir, prueba usandolo en un navegador móvil"
        );
      });
  }
} else {
  $share.style.display = "none";
  console.log("No está disponible el API de web share");
}
