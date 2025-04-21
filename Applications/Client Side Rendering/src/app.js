import { loadTemplate, render } from './render.js';


const views = {
    'home': {
        title: 'HomePage',
        content: 'This is my content'
    },
    'catalog': {
        title: 'CatalogPage',
        content: 'CatalogPage Content'
    },
    'about': {
        title: 'About Us Page',
        content: 'About us Content'
    }
}


const template = (title, content) => `<h1>${title}</h1><p>${content}</p><footer>MyFooter; 2024</footer>`;

document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName == 'A' ) {
        event.preventDefault();
        render(event.target.id)
    }
})
const root = document.querySelector('main');

start();
// render();

// async function render (url) {
//     const view = views[url]
//     root.innerHTML = template(view.title, view.content)
// }

async function start () {
    const layoutTemplate = await loadTemplate('layout');

    const result = render(layoutTemplate, views.home)

}