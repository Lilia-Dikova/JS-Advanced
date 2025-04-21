import { getAllEvents } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';


const catalogTemplate = (items) => html `
    <h3 class="heading">Market</h3>
        <section id="dashboard">
            ${ items.length ? items.map(eventTemplate) : html `<h3 class="empty">No Items Yet</h3>`}
        </section>     
`;

const eventTemplate = (item) => html `
    <div class="item">
    <img src="${item.imageUrl}" alt="example1" />
    <h3 class="model">${item.item}</h3>
    <div class="item-info">
      <p class="price">Price: €${item.price} </p>
      <p class="availability">
        ${item.availability}
      </p>
      <p class="type">${item.type}</p>
    </div>
    <a class="details-btn" href="/market/${item._id}">Uncover More</a>
  </div>`;


export async function showEvents (ctx) {
    const items = await getAllEvents();
    render(catalogTemplate(items));
};



