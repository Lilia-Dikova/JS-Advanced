import { html, render, page } from '../lib.js';
import { createSubmitHandler, getUserData } from '../util.js';
import { createEvent, deleteEvent, getEventById } from '../data/events.js';

const detailsTemplate = (item,isOwner,onDelete) => html`
          <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src="${item.imageUrl}" alt="example1" />
              <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${item.price}</p>
                <p class="details-availability">
                  ${item.availability}
                </p>
                <p class="type">Type: ${item.type}</p>
                <p id="item-description">
                ${item.description}
                </p>
              </div>
              <!--Edit and Delete are only for creator-->
              ${isOwner ? html `
              <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
              </div>` : null}
            </div>
          </div>
        </section>>`;

export async function showDetails (ctx) {
    const id = ctx.params.id;
    const item = await getEventById(id);
    const user =  getUserData();

    const isOwner = item._ownerId === user?._id;

    render(detailsTemplate(item, isOwner,onDelete));

    async function onDelete () {
        const choice = confirm('Are you sure?');
        if (choice) {
            await deleteEvent(id);
            page.redirect('/market');
        }
    }
}