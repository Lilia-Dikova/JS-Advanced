import { html, render, page } from '../lib.js';
import { createSubmitHandler, updateNav } from '../util.js';
import { createMotor, getMotorById, updateMotor } from '../data/events.js';

const editTemplate = (motor, onEdit) => html`
<section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
              <form @submit=${onEdit} class="edit-form">
                <input
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  .value = ${motor.model}
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="moto-image"
                  placeholder="Moto Image"
                  .value = ${motor.imageUrl}
                />
                <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                .value= ${motor.year}
              />
              <input
              type="number"
              name="mileage"
              id="mileage"
              placeholder="mileage"
              .value = ${motor.mileage}
            />
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="contact"
              value = ${motor.contact}
            />
              <textarea
                id="about"
                name="about"
                placeholder="about"
                rows="10"
                cols="50"
              >${motor.about}</textarea>
                <button type="submit">Edit Motorcycle</button>
              </form>
          </div>
        </section>
`;

export async function showEditEvent(ctx) {
    const id = ctx.params.id;
    const motor = await getMotorById(id);
    render(editTemplate(motor, createSubmitHandler(onEdit)));
    
    async function onEdit({ model,imageUrl,year, mileage,contact,about }, form) {
        if (!model || !imageUrl || !year || !mileage || !contact || !about) {
            return alert ('Please, fill out all data!');
        }
        await updateMotor(id, {model,imageUrl,year, mileage,contact,about } );
        page.redirect('/catalog/' + id);
    }
}