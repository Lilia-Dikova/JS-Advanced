import { html, render, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';
import { createEvent } from '../data/events.js';

const createTemplate = (onCreate) => html`
<section id="create">
          <div class="form">
            <h2>Add Event</h2>
            <form @submit=${onCreate}class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
              />
              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
            />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>`;

export function showCreateEvent(ctx) {
    render(createTemplate(createSubmitHandler(onCreate)));
}

export async function onCreate({ name, imageUrl, category, description, date }, form) {
    if (!name || !imageUrl || !category || !description || !date) {
        return alert ('Please, fill out all data!');
    }
    await createEvent(name,imageUrl, category, description, date);
    page.redirect('/market');

}