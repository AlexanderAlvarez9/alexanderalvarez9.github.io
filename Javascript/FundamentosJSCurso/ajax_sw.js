const URL_API = 'https://swapi.co/api/'
const people = 'people/:id'
const opts = { crossDomain: true }

    function getPersona(id) {
        return new Promise((resolve, reject) => {
            const URL = `${URL_API}${people.replace(':id',id)}`
            $
                .get(URL, opts, function (data){
                    resolve(data)
                })
                .fail(() => reject(id))
            })  
    }

        function onError(id){
            console.log(`Sucedio un error al obtener el personaje ${id}`);
            
        }

        var ids = [1, 2, 3, 4, 5, 6, 7]
        
        // var promesas = ids.map(function(id) {
        //     return getPersona(id)
        // })


        var promesas = ids.map( id => getPersona(id))
        Promise
        .all(promesas)
        .then(persona => console.log(persona))
        
        .catch(onError)


        // getPersona(1)
        // .then (personaje => {
        //     console.log(`Hola yo soy 1: ${personaje.name} y peso ${personaje.mass} Kg`)
        //     return getPersona(2)
        // })
        // .then (personaje => {
        //     console.log(`Hola yo soy 2: ${personaje.name} y peso ${personaje.mass} Kg`)
        //     return getPersona(3)
        // })
        // .then (personaje => {
        //     console.log(`Hola yo soy 3: ${personaje.name} y peso ${personaje.mass} Kg`)
        //     return getPersona(4)
        // })
        // .catch(onError)

