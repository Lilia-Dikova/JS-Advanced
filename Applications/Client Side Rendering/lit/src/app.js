import { html, render } from './node_modules/lit-html/lit-html.js';
import { classMap } from './node_modules/lit-html/directives/class-map.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js';

const articles = [
    'Article1',
    'Article2'
];

const classes = {
    red: true,
    underline: true
}

const styles = {
    backgroundColor: 'orange',
    padding: '16px'
}

const template = (name, value, articles) => html`
<h1 class =${classMap(classes)}>Hello, ${name} </h1>
<p>This part should not update</p>
<button @click=${onClick}>Experimental button</button>
<input style=${styleMap(styles)} .value=${value}>
<textarea .value=${value}>
</textarea>
<ul>
${articles.map(a => html`<li>${a}</li>`)}   
</ul>
<p>${null}</p>`;


const root = document.querySelector('main');
render(template('lit-html', 'Lili', articles), root);

function onClick(event) {
    event.preventDefault();

    alert('Stop clicking me!')
}