import page from '../node_modules/page/page.mjs';
import { showCatalog, itemNotFound, showDetails } from './catalog.js'

const root = document.querySelector('main');

page('/', showHome);
page('/catalog', loadData, showCatalog);
page('/catalog/:id', showDetails);
page('/catalog/*', itemNotFound);
page('/about', showAbout);
page('*', pageNotFound);

page()



export function showHome() {
    root.innerHTML = `<p>Home Page</p>`
}
export function showAbout() {
    root.innerHTML = `<p>About us Page</p>`
}
export function pageNotFound() {
    root.innerHTML = `<p>Page not Found</p>`
}
 

async function loadData (ctx, next) {
    console.log('middlewear');
    next()
}