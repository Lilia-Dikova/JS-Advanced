import { html, render } from './node_modules/lit-html/lit-html.js';

document.querySelector("form").addEventListener('submit', onSubmit);
const root = document.getElementById('root');

function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData (e.target);
    const townList = formData.get('towns').split(", ");

    render (template(townList),root)
}

const template = (townList) => html `
 <ul>
 ${townList.map(a => html`<li>${a}</li>`)}  
</ul>
`
