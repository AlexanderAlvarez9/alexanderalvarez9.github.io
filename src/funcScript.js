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
      "Domina las bases de HTML y CSS. Define la arquitectura de tu código y construye un sitio web usando componentes estáticos. Maqueta las pantallas principales de tu página web. Agrega diseño responsivo y usa preprocesadores para optimizar tu código CSS.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1640-frontend-developer/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Fundamentos de JavaScript",
    img:
      "https://static.platzi.com/media/achievements/badge-fundamentos-javascript-61c15bdf-0a83-4aed-8537-b4753e4071e1.png",
    desc:
      "JavaScript es un lenguaje de programación que se trabaja desde el navegador. Construye programas, conoce el entorno, los condicionales y las estructuras repetitivas. Aprende cuáles son y cómo se declaran las variables y las funciones de JS.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1339-fundamentos-javascript/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Asincronismo con JavaScript",
    img:
      "https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png",
    desc:
      "Apropia los conceptos fundamentales de asincronismo con JavaScript, aplica sus diferentes estructuras y desarrolla soluciones asíncronas. ¡Amplia tus conocimientos de programación aquí!",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1789-asincronismo-js/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de ECMAScript 6+",
    img: "https://static.platzi.com/media/achievements/badge-ecmascript-6-d48e7bb7-a7a4-416d-a3b4-e11f0b13a229.png",
    desc: "JavaScript es el lenguaje más utilizado para desarrollo de aplicaciones web, principalmente en el frontend. Cada año, ECMA International publica una nueva edición de ECMAScript, la especificación a la cual se ajusta JavaScript. Aprende las nuevas características que implementa ECMAScript desde la versión 6 hasta la versión 10.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1815-ecmascript-6/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Prework: Buenas Prácticas y Entorno de Desarrollo",
    img:
      "https://static.platzi.com/media/achievements/badge-prework-da6b0493-9908-40f3-ad53-f5d330b995b8.png",
    desc:
      "Comienza tus proyectos de desarrollo para JavaScript configurando un entorno de desarrollo cómodo y adaptado a tus necesidades. Empieza por la herramienta más poderosa para un desarrollador: la terminal. Aprenderás a instalarla, ejecutar comandos y compilar código. Haz parte del trabajo colaborativo entre desarrolladores configurando Github, creando repositorios remotos, y aprendiendo a hacer push y pull.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1650-prework/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso Básico de JavaScript",
    img: "https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png",
    desc: "Conoce los conceptos clave del lenguaje de programación que se está comiendo al mundo. Aprende qué es una variable, una función, un objeto y dónde se guardan esos valores. Descubre qué es Scope y cómo se utilizan los loops. Obtén las herramientas para saber cómo tomar decisiones y validar acciones. En este curso, darás el primer paso para empezar tu carrera como desarrollador.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1814-basico-javascript/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Desarrollo Web Online",
    img:
      "https://static.platzi.com/media/achievements/1350-09ddb033-354b-4c0c-84a4-56cbb71d0b08.png",
    desc:
      "Desarrolla tu propia página web con HTML5 y CSS3. Crea un sitio web para tu producto, personalízalo e inicia tu carrera para ser un Frontend profesional.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1350-html5-css3/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de HTML y CSS",
    img:
      "https://static.platzi.com/media/achievements/badges-html-css-b0a71550-d5e7-4e27-aca2-f09f1321a517.png",
    desc:
      "Aprende a crear sitios web con HTML y CSS. Profundiza en el desarrollo y personalización de páginas web navegables, intuitivas y a la medida de tus necesidades. Crea tus primeros proyectos con Platzi.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1492-html-css/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de CSS Grid Layout",
    img:
      "https://static.platzi.com/media/achievements/1229-dbff8a06-bcca-48e9-98e3-1fd76d6216f3.png",
    desc:
      "El módulo CSS Grid Layout nos permite generar distribuciones del contenido en nuestros sitios web de forma eficiente. Controla esta estructura bidimensional de filas y columnas fácilmente con propiedades de CSS logrando un mejor flujo que el que se tiene al utilizando otras propiedades de CSS",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1229-css-grid-layout/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Responsive Design",
    img:
      "https://static.platzi.com/media/achievements/1362-87c8ad3d-a50d-41a2-b023-ad838594e1c9.png",
    desc:
      "Maqueta aplicaciones con diseño web adaptable. Adapta tus sitios para que funcionen en cualquier pantalla, dispositivo y resolución con HTML5 y CSS3 y genera la mejor experiencia para tus usuarios con Responsive Design.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1362-responsive-design/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de jQuery a JavaScript",
    img:
      "https://static.platzi.com/media/achievements/1316-718fb32b-2ab6-4042-a25b-ac2169e05cc3.png",
    desc:
      "Aprende a pasar código de jQuery a JS. Crea páginas dinámicas y animaciones en muy poco tiempo. Optimiza tu código jQuery y programa scripts de forma fácil y rápida con Javascript.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1316-jquery-js/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Animaciones para la Web",
    img:
      "https://static.platzi.com/media/achievements/1103-0dce9ce6-dd88-466b-af07-76a87643c8b7.png",
    desc: "Crea animaciones de interfaces, maneja fotográmas en la web, aplica transiciones, transformaciones, timing y composición. Logra que tus sitios sean más dinámicos.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1103-animaciones-web/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso profesional de Git y GitHub",
    img:
      "https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png",
    desc:
      "Deja de versionar tus proyectos usando tu propio sistema de control de versiones. Mejor usa Git el Sistema de control de versiones por excelencia que utiliza la industria, aprende a gestionar tus proyectos alojándolos en Github. Domina Git y Github de cero a avanzado.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1557-git-github/diploma/detalle/",
    show: true,
  }, {
    title: "Curso de Buenas Prácticas para Escritura de Código",
    img: "https://static.platzi.com/media/achievements/badge-buenas-practicas-escritura-codigo-fcdbd219-8bd1-4578-ac07-b5abccf6e3b8.png",
    desc: "Escribe código legible y libre de vicios. Conoce los principios básicos para programar aplicaciones que sean fáciles de mantener y ampliar. Realiza pruebas en tu código para encontrar errores antes de enviar a producción y mejora tus habilidades para trabajar en equipos de desarrollo de software.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1630-mejor-codigo/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Programación Orientada a Objetos: POO",
    img:
      "https://static.platzi.com/media/achievements/badges-poo-513deb20-a5bd-40a7-b97a-c36dc772d512.png",
    desc:
      "La misión: lograr que la virtualidad sea idéntica a la realidad. El elegido para esta tarea: tú. Sé parte de la generación que logra cambiar el mundo a través de ideas innovadoras, porque la diferencia entre ser testigo del cambio y ser parte de él comienza con Platzi.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1474-oop/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Programación Básica",
    img:
      "https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png",
    desc:
      "Programa desde cero, domina Javascript, entiende HTML y aprende de algoritmos. Sí, desde cero. Entenderás la lógica del código, cómo piensan los programadores y cómo programar juegos, proyectos y hasta robots y electrónica. Aprender a programar no es fácil, pero Platzi lo hace efectivo.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1050-programacion-basica/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Fundamentos de Ingeniería de Software",
    img:
      "https://static.platzi.com/media/achievements/badge-ing-software-2017-18f503fd-36bd-42d8-b1a1-492865659687.png",
    desc:
      "Comienza tu proyecto aprendiendo las bases de la ingeniería de software. En este curso podrás entender cómo funcionan las bases de la electrónica, los diferentes sistemas operativos y las redes que te permiten usar Inter",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1098-ingenieria/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Introducción a la Terminal y Línea de Comandos",
    img:
      "https://static.platzi.com/media/achievements/badges-terminal-c9ee432b-2598-4e94-88d8-0a30842ef886.png",
    desc:
      "Explora la terminal y optimiza la navegación y ejecución de programas en sistemas operativos Unix. Conociendo y dominando la terminal, podrás invocar y ejecutar programas, crear directorios de los mismos y navegar en ellos de una manera veloz y eficiente.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1748-terminal/diploma/detalle/",
    show: true,
  },
  {
    title: "Introducción a Terminal y Línea de Comandos 2019",
    img:
      "https://static.platzi.com/media/achievements/1276-62e97e39-63d1-4139-b299-fc5eb65a9905.png",
    desc:
      "Explora la terminal y optimiza la navegación y ejecución de programas en sistemas operativos Unix. Conociendo y dominando la terminal, podrás invocar y ejecutar programas, crear directorios de los mismos y navegar en ellos de una manera veloz y eficiente.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1276-terminal/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Inglés Básico",
    img:
      "https://static.platzi.com/media/achievements/badge-basico-ingles-e073f711-763d-4129-badc-5e4baa78b225.png",
    desc:
      "Aprende inglés desde cero. Entiende conceptos básicos y construye oraciones simples, enriquece tu vocabulario y da el primer paso en el desarrollo de tus habilidades en el idioma.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1358-ingles-basico/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Inglés Básico: Conversación",
    img:
      "https://static.platzi.com/media/achievements/1371-db5ea3c7-4ac9-4b61-b786-9346ebb3fc7f.png",
    desc:
      "Aprende inglés desde cero. Fortalece tus habilidades comunicativas para mantener conversaciones efectivas en inglés.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1371-ingles-conversacion/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Marca Personal",
    img:
      "https://static.platzi.com/media/achievements/1220-da04fca8-8561-40ce-a678-3585bde8d899.png",
    desc:
      "Tener una marca personal es fundamental para tu desarrollo profesional. Construir un portafolio de proyectos y fortalecer tu presencia online te ayudará a resaltar para ampliar tus oportunidades laborales, conseguir un mejor empleo o crear tu propio negocio.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1220-marca-personal/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Computación Básica",
    img:
      "https://static.platzi.com/media/achievements/badge-computacion-basica-7bbb6f8a-04e3-4af2-82f2-8b8f2932ba04.png",
    desc:
      "¿Eres principiante y quieres tener las bases para manejar tu computadora de manera autónoma? Inicia en el mundo de la computación y aprende a instalar programas en Windows 10. Envía correos, gestiona tu seguridad e identifica las partes básica de una computadora.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1741-computacion-basica/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Finanzas Personales",
    img:
      "https://static.platzi.com/media/achievements/badge-finanzas-personales-af9971ca-d6ce-403c-a940-8ecfd0de71f3.png",
    desc:
      "Tomar decisiones económicas responsables e informadas es primordial. En este curso conocerás las herramientas para poder tener control de tus finanzas y tener una mejor planeación y proyección de tus recursos.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1190-finanzas/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Introducción a la Edición con Premiere",
    img:
      "https://static.platzi.com/media/achievements/badges-introduccion-edicion-premiere--8a48cb73-1bfd-487c-a741-15fd8b1796e0.png",
    desc:
      "Conoce las mejores técnicas de edición para cada tipo de video. Crea piezas que te permitan contar tu mundo y mil mundos más en imágenes y sonidos. Domina el mundo del montaje creativo a partir de los comandos y funciones que ofrece Premiere.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1190-finanzas/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Estrategias para Aprender en Línea Efectivamente",
    img:
      "https://static.platzi.com/media/achievements/badge-estrategias-aprender-enlinea-df2bec85-990c-4afb-964c-8fb2dfbd1c2e.png",
    desc:
      "Todos los cerebros funcionan diferente ¿cómo aprende el tuyo?. En este curso aprenderás a identificar tus fortalezas cognitivas para mejorar tu rendimiento académico. Descubrirás tu estilo de aprendizaje y pondremos en práctica técnicas para estimular tu inteligencia, atención y memoria.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1190-finanzas/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Comunicación Online con Slack ",
    img:
      "https://static.platzi.com/media/achievements/badges-comunicacion-slack-a9bd2f28-82f2-4fef-8d67-6cec70724d94.png",
    desc:
      "Mejora el ritmo de trabajo de tu equipo con Slack, una herramienta de comunicación ampliamente utilizada que te permite potenciar la transformación digital de tu empresa. Aprovecha la agilidad de la mensajería instantánea y los recursos de las redes sociales para optimizar tiempo y recursos.",
    linkCert:
      "https://platzi.com/@jhonalexanderalvarezromero/curso/1399-slack/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Gestión Efectiva del Tiempo",
    img: "https://static.platzi.com/media/achievements/badge-gestion-tiempo-5368aa24-4418-4e10-b6c3-c8775b849bf9.png",
    desc: "Gestionar tu tiempo personal y profesional de manera eficiente es una destreza que te permitirá alcanzar tus objetivos de aprendizaje. Aprende las bases necesarias para priorizar tus tareas. Domina técnicas de organización del tiempo. Acelera tu crecimiento profesional con el Curso de Gestión Efectiva del Tiempo de Platzi.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1749-gestion-tiempo/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Pensamiento Lógico",
    img: "https://static.platzi.com/media/achievements/badges-pensamiento-logico-3e33eb45-302d-408a-a624-bee4e57118d3.png",
    desc: "¡Aprende a imaginar y a razonar con Platzi! Domina técnicas para aplicar en la toma de decisiones y en la solución de problemas cotidianos. Logra un aprendizaje óptimo y significativo. Mejora tu estructura mental y desarrolla todo tu potencial formando las bases del pensamiento lógico.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1444-pensamiento-logico/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso Práctico de HTML y CSS",
    img: "https://static.platzi.com/media/achievements/badge-practico-html-css-1-106665ee-bf4f-4301-8991-1fab9e54a73e.png",
    desc: "Ahora que ya tienes todos los conocimientos de HTML y CSS, estás listo para este curso práctico en el cual tendrás un reto: clonar la página de Google. Reforzarás conceptos como posicionamiento, modelo de cajas, tipos de Display, selectores como clases, IDS, Flexbox y Grid.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1758-html-practico/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso Práctico de Maquetación en CSS",
    img: "https://static.platzi.com/media/achievements/badge-css-grid-91153317-c981-4a38-a534-b651b4395267.png",
    desc: "Ahora que ya tienes todos los conocimientos teóricos de CSS, estás listo para este curso práctico en el cual tendrás un reto: crear un blog personal. Así podrás reforzar tus conocimientos en maquetación de HTML 5 semántico mientras creas un espacio para promocionar tu trabajo profesional.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1744-practico-css/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Accesibilidad Web",
    img: "https://static.platzi.com/media/achievements/badge-accesibilidad-web-b5d0e962-872c-45b0-9eef-578d11462de7.png",
    desc: "La accesibilidad web es el concepto de desarrollo que al aplicarlo ayuda a garantizar que personas con capacidades reducidas puedan interactuar con tus páginas y aplicaciones web. En este curso de Accesibilidad Web de Platzi aprenderás cuáles son los principios de la accesibilidad y conocerás cómo mejorar la accesibilidad de tus proyectos. Además dominarás los lineamientos fundamentales para crear proyectos inclusivos y universales. Cuando creas pensando en la accesibilidad, ayudas a que personas con habilidades reducidas tengan una mejor experiencia en la web.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1802-accesibilidad-web/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso Básico de Seguridad Informática para Empresas",
    img: "https://static.platzi.com/media/achievements/badge_seguridad-informatica-para-empresas-1a8034b5-6887-4c34-8ba9-c528a28f844c.png",
    desc: "Todos los días generamos información personal y empresarial valiosa, con este curso obtendrás las herramientas necesarias para protegerla, identificar alertas tempranas, cifrar tus datos y realizar conexiones seguras desde tu computador y teléfono. La seguridad informática es responsabilidad de todos.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1647-seguridad-empresas/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Closures y Scope en JavaScript",
    img: "https://static.platzi.com/media/achievements/badge-_closures-scope-javascript-3848a8e7-cf6f-47c5-a824-df5fc0c14d41.png",
    desc: "Como desarrollador JavaScript debes comprender a la perfección los diferentes alcances que tienen tus variables cuando son declaradas. En este curso aprenderás todos los conceptos fundamentales de Scope global y local, cómo declarar variables con const, let y var. Con ejercicios prácticos domina el uso de Closures en tus desarrollos.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1807-scope/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de JavaScript Engine (V8) y el Navegador",
    img: "https://static.platzi.com/media/achievements/badge-javascript-engine-v8-navegador-de67cba4-0548-4361-9c6a-1a25aa96fa2a.png",
    desc: "Descubre cómo funciona el motor de JavaScript \"V8\" y su interacción con el navegador. Así podrás evitar errores como Hoisting y corregir tu código. Aprende cómo funciona el JIT Compiler, Memory heap, Call stack y JavaScript Runtime.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1798-javascript-navegador/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de React.js",
    img: "https://static.platzi.com/media/achievements/badge-react-2018-afc93257-48af-4e54-acaa-4d0433380f64.png",
    desc: "React es una de las librerías más utilizadas hoy para crear aplicaciones web. Aprende desde la creación y diseño de componentes hasta traer datos de un API. Desarrolla aplicaciones web de muy alta calidad en tiempo record con React.js",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1548-react/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Sass",
    img: "https://static.platzi.com/media/achievements/1244-caa8d210-5abc-4728-b21a-609a23a572a7.png",
    desc: "Un preprocesador es una herramienta que nos permite escribir pseudo-código que más adelante es convertido a CSS. Sass es un preprocesador maduro, estable y poderoso que funciona como una extensión de CSS. Esta herramienta permite potenciar las funcionalidades y habilidades de CSS. Aprende a crear variables, bucles, funciones y modularidad. Crea un framework como base de CSS para construir tus propios proyectos.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1244-sass/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Single Page Application con JavaScript Vanilla",
    img: "https://static.platzi.com/media/achievements/badge-spa-javascript-vanilla-71b296fc-7041-4084-9f94-0ed5e1b53d18.png",
    desc: "Crea una SPA (Single Page Aplication) con JavaScript Vanilla. Diseña una experiencia de navegación fluida para tus usuarios a través del manejo de rutas y el llamado a una API para mostrar la información y navegar entre los detalles de cada personaje. Aprovecha la simpleza de JS y ponla al servicio de tus necesidades entrando a este curso de SPA con JavaScript Vanilla.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1787-spa-javascript/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de WPO: Optimización de Carga de Sitios Web",
    img: "https://static.platzi.com/media/achievements/1390-a7211209-7103-496d-958a-52cb8b05b116.png",
    desc: "Mejora la experiencia de los usuarios en tu sitio web con WPO, el factor SEO que permite optimizar su capacidad de respuesta. Disminuye el tiempo en el que se muestra el contenido de tu sitio web para posicionarlo en los buscadores y aumentar el tráfico de manera eficaz.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1390-optimizacion-web/diploma/detalle/",
    show: true,
  },
  {
    title: "Taller de Creación de Router para Single Page App con JavaScript",
    img: "https://static.platzi.com/media/achievements/badge-router-single-page-app-js-ac0b8cfa-7bc8-4010-a9df-7500e5c1e078.png",
    desc: "Comprende el proceso lógico que permite la creación de un Router para la navegación de una página web. Implementa paso a paso las instrucciones para crear un Router para una Single Page App usando JavaScript.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1771-singlepage-app/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Fundamentos de Diseño de Interfaces UI y UX",
    img: "https://static.platzi.com/media/achievements/badge-diseno-interfaces-ui-ux-0923f1f8-ec5e-47b1-a5af-38642c94e2eb.png",
    desc: "Diseña interfaces atractivas e intuitivas con Sketch aplicando los principios de usabilidad y procesos de UX. Aprende técnicas de investigación que te permiten conocer a tus usuarios, aplica Guerilla testing para validar tus diseños y construye un Design System empleando Atomic Design. Entrega al equipo de desarrollo tu diseño de interfaz usando Zeplin.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1754-diseno-interfaces-ux/diploma/detalle/",
    show: true,
  },
  {
    title: "Cómo Conseguir Trabajo en Programación",
    img: "https://static.platzi.com/media/achievements/1227-863956bd-65fd-4ca3-b2de-51d8e67786ca.png",
    desc: "Potencia tus habilidades y aprovecha tu perfil profesional para conseguir el trabajo de tus sueños en el área de desarrollo. Aprende y crece con éxito para emplearte en grandes empresas, multinacionales, trabajo freelance, y por qué no, Silicon Valley.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1227-developer/diploma/detalle/",
    show: false,
  },
  {
    title: "Curso de Webpack",
    img: "https://static.platzi.com/media/achievements/badge-webpack-e9f63293-1e52-4bd1-90b7-82740c8131a9.png",
    desc: "Mejora tu experiencia como desarrollador teniendo un código legible, organizado y sencillo de trabajar con Webpack, una tecnología que te ayuda a empaquetar JavaScript y los assets de cualquier tipo para convertirlos en algo que el navegador puede interpretar.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1620-webpack/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso Práctico de React JS",
    img: "https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png",
    desc: "React es una de las librerías más utilizadas hoy para crear aplicaciones web. Aprende a través de la creación de la interfaz de PlatziVideo todo lo que necesitas para crear increíbles componentes con React",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1651-react-ejs/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso Profesional de JavaScript",
    img: "https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png",
    desc: "Mejora tus habilidades en Javascript. Conoce Typescript y cómo puedes ocuparlo para mejorar el control de tus variables. Comprende conceptos avanzados que te permitan plantear mejores soluciones en tu código. Conoce las APIs del DOM y descubre cómo puedes organizar mejor tu código utilizando patrones de diseño.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1642-javascript-profesional/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Introducción a la Edición con Premiere 2018",
    img: "https://static.platzi.com/media/achievements/badges-introduccion-edicion-premiere--8a48cb73-1bfd-487c-a741-15fd8b1796e0.png",
    desc: "Domina los conceptos básicos de la edición y el montaje en Premiere Pro. Edita color y audio; crea títulos y textos; genera subtítulos y finaliza proyectos audiovisuales increíbles. Domina el mundo del montaje creativo y aprende todo lo que eres capaz de crear con el Curso Básico de Adobe Premiere de Platzi.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1261-premiere-2018/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Comunicación Online con Slack 2018",
    img: "https://static.platzi.com/media/achievements/badges-comunicacion-slack-a9bd2f28-82f2-4fef-8d67-6cec70724d94.png",
    desc: "Mejora el ritmo de trabajo de tu equipo con Slack, una herramienta de comunicación ampliamente utilizada que te permite potenciar la transformación digital de tu empresa. Aprovecha la agilidad de la mensajería instantánea y los recursos de las redes sociales para optimizar tiempo y recursos.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1399-slack-2018/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Gestión de Dependencias y Paquetes con NPM",
    img: "https://static.platzi.com/media/achievements/badge-gestion-dependencias-paquetes-npm-f02e4608-c688-4d99-aa6d-293ea6c0be8d.png",
    desc: "NPM es el gestor de paquetes y dependencias más usado para desarrollar con JavaScript. Administra módulos, distribuye paquetes y agrega dependencias a tus proyectos. Instala y gestiona librerías Javascript. Crea tus propias librerías y domina uno de las herramientas más importantes en el desarrollo con JavaScript.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1763-npm/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso de Unit Testing con Jest en React",
    img: "https://static.platzi.com/media/achievements/badge-unit-testing-jest-react-bb2bcb68-aeb7-4ff3-886e-f04816dfe0a0.png",
    desc: "Genera tests unitarios de forma sencilla y comprensible en JavaScript con Jest, un framework de testing intuitivo y flexible que te permite crear mocks o personalizar matchers con una interfaz accesible. Domina sus funcionalidades innovadoras y conviértete en un experto en testing de JS con Jest",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1788-jest/diploma/detalle/",
    show: true,
  },
  {
    title: "Curso para Lavarse las Manos Correctamente",
    img: "https://static.platzi.com/media/achievements/badge-manos-final-1d5b2155-7bcc-4b6b-a2e2-e7dedcd13b81.png",
    desc: "Lavarse las manos es sencillo, pero no le dedicamos el tiempo suficiente. En este curso te explicamos la forma correcta de hacerlo.",
    linkCert: "https://platzi.com/@jhonalexanderalvarezromero/curso/1859-lavarse-manos-correctamente/diploma/detalle/",
    show: false,
  },
];

//Arma cursos
var cursohtml = document.getElementById("cursosid");

function construyeCursos() {
  for (let i = 0; i < cursos.length; i++) {

    if (cursos[i].show) {
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
    } else {
      console.log('Cursos sin mostrar');

    }
  }
}

let $totalCourses = document.querySelector('.totalCourses');
$totalCourses.innerHTML += cursos.length;

construyeCursos();


//Compartir desde movil
const $share = document.querySelector("#share");
if ("share" in navigator) {
  $share.addEventListener("click", share);
  function share() {
    navigator
      .share({
        title: "Comparte mi Portafolio",
        text: "Portafolio de Alexander Alvarez en GitHub",
        url: "https://AlexanderAlvarez9.github.io/",
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
  console.error("No está disponible el API de web share");
}