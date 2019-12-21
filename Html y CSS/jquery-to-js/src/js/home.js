console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise(function (todoBien, todoMal) {

  setTimeout(function () {
    todoBien('se acabó el tiempo');
  }, 5000)

})

const getUser = new Promise(function (todoBien, todoMal) {

  setTimeout(function () {
    todoBien('se acabó el tiempo 3');
  }, 3000)

})


// getUser
//   .then(function(){
//     console.log('todo está bine en la vida')
//   })
//   .catch(function(message){
//     console.log(message)
//   })

// Promise.all([
//   getUser,
//   getUserAll
// ])
// .then(function(message){
//   console.log(message)
// })
// .catch(function(message){
//   console.log(message)
// })

// Promise.race([
//   getUser,
//   getUserAll
// ])
// .then(function(message){
//   console.log(message)
// })
// .catch(function(message){
//   console.log(message)
// })
// $.ajax({
//   url: 'https://randomuser.me/api/dd',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   },
//   error: function(error) {
//     console.log(error)
//   }
// });

fetch('https://randomuser.me/api/')
  .then(function (response) {
    //console.log(response)
    return response.json()
  })
  .then(function (user) {
    console.log('user', user.results[0].name.first)
  })
  .catch(function () {
    console.log('algo falló')
  });

(async function load() {
  //await 
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(data.data.movie_count > 0) {
      return data;
    }
    throw new Error('No se encontró ningun resultado');
  }
  async function getDataUser(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(data.info.results > 0){
      return data;
    }
    throw new Error('No se encontro ningun usuario');
  }
  const $formContainer = document.getElementById('form');
  const $homeContainer = document.getElementById('home');
  const $featuringContainer = document.getElementById('featuring');
  function setAttributes($element, attributes) {
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute])
    }
  }
  const BASE_API = 'https://yts.lt/api/v2/';
  const BASE_API_USERLIST = 'https://randomuser.me/api/';
  function featuringTemplate(peli) {
    return (`
        <div class="featuring">
          <div class="featuring-image">
            <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
          </div>
          <div class="featuring-content">
            <p class="featuring-title">Pelicula encontrada</p>
            <p class="featuring-album">${peli.title}</p>
          </div>
        </div>
        `)
  }
  $formContainer.addEventListener('submit', async (event) => {
    event.preventDefault();
    $homeContainer.classList.add('search-active')
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50
    })
    $featuringContainer.append($loader);

    const data = new FormData($formContainer);
    try{
      const {
        data: {
          movies: pelis
        }
      } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
      const HTMLString = featuringTemplate(pelis[0]);
      $featuringContainer.innerHTML = HTMLString;
    }
    catch(error) {
      alert(error.message);
      $loader.remove();
      $homeContainer.classList.remove('search-active');
    }
    
    
  })

  function videoItemTemplate(movie, category) {
    return (`<div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
        </div>`)
  }
  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  function userItemTemplate(user) {
    userName = `${user.name.first} ${user.name.second}`;
    return (`<li class="playlistFriends-item">
        <a href="#">
          <img src="${user.picture.thumbnail}" alt="${userName}" />
          <span>
          ${userName}
          </span>
        </a>
      </li>`)
  }
  function renderUserList(list, $container){
    $container.children[0].remove();
    list.forEach((user) => {
      const HTMLString = userItemTemplate(user);
      const userElement = createTemplate(HTMLString);
      $container.append(userElement);
      const image = userElement.querySelector('img');
      image.addEventListener('load', () => {
        event.srcElement.classList.add('fadeIn');
      })
    })
  }
  function movieRecommendedItemTemplate(movie) {
    return (`<li class="myPlaylist-item">
        <a href="${movie.url}">
          <span>
            ${movie.title}
          </span>
        </a>
      </li>`)
  }
  function renderRecommendedMovieList(list, $container) {
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = movieRecommendedItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement); 
    })
  }
  // console.log(videoItemTemplate('src/images/covers/bitcoin.jpg', 'Bitcoin'));
  function addEventClick($element) {
    $element.addEventListener('click', () => {
      //alert('click')
      showModal($element);
    })
  }
  function renderMovieList(list, $container, category) {
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie, category);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      const image = movieElement.querySelector('img');
      image.addEventListener('load', () => {
        event.srcElement.classList.add('fadeIn');
      })
      //movieElement.classList.add('fadeIn');
      addEventClick(movieElement);
    })
  }
  function saveInCache(name, object) {
    var nowTimestamp = new Date().getTime();
    var cacheObject = { timestamp: nowTimestamp, data: object };
    window.localStorage.setItem(name, JSON.stringify(cacheObject));
  }
  function cacheTimeIsCorrect(timestamp){
    const timestampCorrect = new Date().getTime()- (5*60000);
    return(timestamp > timestampCorrect)
  }
  function getCacheReady(listName){
    const cacheList = window.localStorage.getItem(listName);
    if(cacheList) {
      const cacheListParsed = JSON.parse(cacheList);
      if(cacheTimeIsCorrect(cacheListParsed.timestamp))
        return cacheListParsed.data;
    }
    return null;
  }
  async function cacheMovieListExist(category) {
    listName = `${category}List`;
    const data = getCacheReady(listName);
    if(!data) {
      const  { data: { movies: movies } } = await getData(`${BASE_API}list_movies.json?genre=${category}`);
      saveInCache(listName, movies);
      return movies;
    }
    return data;
  }

  const actionList = await cacheMovieListExist('action');
  //saveInLocalStorage('actionList', actionList);
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action');
  
  const dramaList = await cacheMovieListExist('drama');
  //saveInLocalStorage('dramaList', dramaList);
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');
  
  const animationList = await cacheMovieListExist('animation');
  //saveInLocalStorage('animationList', animationList);
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation');

  const {results: userList } = await getDataUser(`${BASE_API_USERLIST}?results=20`)
  const $userContainer = document.getElementById('friends');
  renderUserList(userList, $userContainer);

  const { data: {movies} } = await getData(`${BASE_API}list_movies.json?sort=rating&limit=15`);
  const $recommendedContainer = document.getElementById('recommendedMovies');
  renderRecommendedMovieList(movies, $recommendedContainer);

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1')
  const $modalImage = $modal.querySelector('img')
  const $modalDescription = $modal.querySelector('p')
  function findById(list, id) {
    return list.find(movie => movie.id === parseInt(id, 10))
  }
  function findMovie(id, category) {
    switch (category) {
      case 'action': {
        return findById(actionList, id)
      }
      case 'drama': {
        return findById(dramaList, id)
      }
      default: {
        return findById(animationList, id)
      }
    }

  }

  function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id, category);
    $modalTitle.textContent = data.title;
    $modalImage.setAttribute('src', data.medium_cover_image);
    $modalDescription.textContent = data.description_full;
  }

  $hideModal.addEventListener('click', hideModal);
  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }
})()