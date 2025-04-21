import { html, render } from './node_modules/lit-html/lit-html.js';
import { get, post } from './requests.js'
document.querySelector("form").addEventListener('Submit',addItem);


const root = document.getElementById('menu')

const url = 'http://localhost:3030/jsonstore/advanced/dropdown'

const items = Object.values(await get(url));

const template = (item) => html`<option value=${item._id}>${item.text}</option>`

start();

function start(){
    render(items.map(template), root);
}

document.querySelector("form").addEventListener('submit',addItem);

function addItem(e) {
    e.preventDefault();
    let text = document.getElementById('itemText').value;

    let data = {
        'text': text
    }
    
     post(url,data)
 }