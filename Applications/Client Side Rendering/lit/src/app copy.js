import {html, render} from './node_modules/lit-html/lit-html.js';


let disabled = true;


const template = (name, clock) => html `
<h1>Hello, ${name} </h1>
<p>This part should not update</p>
${clock}
<button ?disabled=${disabled}>Experimental button</button>`;

const clock = (time, color) => html `
<div>
    <h2 class=${color}>Dynamic clock</h2>
    <p>The time is ${time}</p>
</div>`

const root =document.querySelector('main');

let isRed = true;

setInterval (update(1000))

function update () {
    isRed = !isRed;
    render (template('lit-html',clock(new Date(), isRed ? 'red' : 'green' )),root)
}
