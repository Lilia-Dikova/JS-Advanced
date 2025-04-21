window.addEventListener('load', start);

async function start() {
    const main = document.querySelector('main');
    const recepies = await getRecipes();

    main.replaceChildren(...Object.values(recepies).map(createCard));
}

function createCard({name , img}) {
    let element = document.createElement('article');
    element.className =  'preview';
    element.innerHTML = `      
     <div class="title">
    <h2>${name}</h2>
    </div>
    <div class="small">
    <img src="${img}">
    </div>`;

    return element;
}

async function showDetails (id, element) {
    const details = await getDetails(id);

     element.innerHTML = `
     `
}



async function getRecipes() {
    const url = `http://localhost:3030/jsonstore/cookbook/recipes`;

    try {
        const response = await fetch(url);
        const recepies = await response.json();

        return recepies;

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

async function getDetails(id) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

    try {
        const response = await fetch(url);
        const details = response.json();

        return details;

    } catch (error) {
        alert(error.message);
        throw error;
    }

}
