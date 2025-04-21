import { html, render, page } from '../lib.js';
import { createSubmitHandler, getUserData } from '../util.js';
import { createEvent, deleteEvent, getEventById } from '../data/events.js';

const detailsTemplate = (event,hasUser,isOwner,onDelete) => html`
      <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${event.imageUrl}" alt="example1" />
            <p id="details-title">${event.name}</p>
            <p id="details-category">
              Category: <span id="categories">${event.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${event.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span
                  >${event.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">0</span> times.</h3>

            <!--Edit and Delete are only for creator-->
            ${hasUser ? html `
            <div id="action-buttons">
              ${isOwner ? html `
              <a href="/edit/${event._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${onDelete} >Delete</a>` : html  `
              <a href="javascript:void(0)" id="go-btn">Going</a>`}
            </div> `: null}
          </div>
        </section>`;

export async function showDetails (ctx) {
    const id = ctx.params.id;
    const event = await getEventById(id);
    const user =  getUserData();
    const hasUser = !!user;

    const isOwner = hasUser && event._ownerId == user?._id;

    render(detailsTemplate(event, hasUser, isOwner,onDelete));

    async function onDelete () {
        const choice = confirm('Are you sure?');
        if (choice) {
            await deleteEvent(id);
            page.redirect('/catalog');
        }
    }
}