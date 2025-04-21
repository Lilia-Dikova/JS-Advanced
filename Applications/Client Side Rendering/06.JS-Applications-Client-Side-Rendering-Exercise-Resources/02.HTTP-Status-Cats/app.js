import { html, render } from "./node_modules/lit-html/lit-html.js";
import { styleMap } from "./node_modules/lit-html/directives/style-map.js";
import { cats } from './catSeeder.js'

const root = document.createElement('ul');
document.getElementById('allCats').appendChild(root)

const template = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${onClick} class="showBtn">Show status code</button>
                <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                </div>
        </div>
</li>
`

render(cats.map(template), root);

function onClick(e) {
    e.preventDefault();
    const div = e.target.parentElement.querySelector('.status')

    if (e.target.textContent == 'Show status code') {
        
        e.target.textContent = 'Hide status code';
        div.style.display = 'block'
    } else {
        e.target.textContent = 'Show status code';
        div.style.display = 'none'
    }
}
