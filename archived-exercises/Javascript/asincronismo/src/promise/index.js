const someThingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('yeiii!')
        } else {
            reject('whoooops!')
        }
    })
}

someThingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));




const someThingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('true');
            }, 2000);
        } else {
            const error = new Error('Error2');
            reject(error)
        }
    })
}

someThingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Todo bien todo correcot'))
    .catch(erro => console.error(erro));



Promise.all([someThingWillHappen(), someThingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(erro => {
        console.error(erro);
    })