import { html, render, page } from '../lib.js';
import { createSubmitHandler, getUserData } from '../util.js';
import { createMotor, deleteMotor, getMotorById } from '../data/events.js';

const detailsTemplate = (motor,isOwner,onDelete) => html`
   <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="../../${motor.imageUrl}" alt="example1" />
            <p id="details-title">${motor.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${motor.year}</p>
                <p class="mileage">Mileage: ${motor.mileage} km.</p>
                <p class="contact">Contact Number: ${motor.contact}</p>
                <p id = "motorcycle-description">
                   ${motor.about}
                </p>
              </div>
               <!--Edit and Delete are only for creator-->
            ${isOwner ? html`
          <div id="action-buttons">
            <a href="/edit/${motor._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
          </div>` : null}
            </div>
        </div>
      </section>>`;

export async function showDetails (ctx) {
    const id = ctx.params.id;
    const motor = await getMotorById(id);
    console.log(motor);
    const user =  getUserData();
    //const hasUser = !!user;

    const isOwner = motor._ownerId === user?._id;

    render(detailsTemplate(motor, isOwner,onDelete));

    async function onDelete () {
        const choice = confirm('Are you sure?');
        if (choice) {
            await deleteMotor(id);
            page.redirect('/catalog');
        }
    }
}