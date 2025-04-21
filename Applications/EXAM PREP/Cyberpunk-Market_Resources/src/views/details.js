import { html, render, page } from '../lib.js';
import { createSubmitHandler, getUserData } from '../util.js';
import { createEvent, deleteEvent, getEventById } from '../data/events.js';

const detailsTemp = (data, isOwner, deleteItem) => html`
<section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src="${data.imageUrl}" alt="example1" />
              <p id="details-title">${data.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${data.price}</p>
                <p class="details-availability">
                  ${data.availability}
                </p>
                <p class="type">Type: ${data.type}</p>
                <p id="item-description">
                ${data.description}
                </p>
              </div>
              <!--Edit and Delete are only for creator-->
              ${isOwner ? html `
              <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${deleteItem}>Delete</a>
              </div>` : null}
            </div>
          </div>
        </section>>`;
 
export async function displayDetails(ctx) {
  const id = ctx.params.id;
  const data = await getEventById(id);

  const user =  await getUserData();

const isOwner = data._ownerId === user?._id;

  render(detailsTemp(data, isOwner, deleteItem));
}
 
async function deleteItem(event) {
  event.preventDefault();
  const isDel = confirm("Delete item?");
  const id = event.target.dataset.id;
  if (!isDel) {
    return;
  }
  await deleteItemById(id);
  page.redirect("/market");
}
