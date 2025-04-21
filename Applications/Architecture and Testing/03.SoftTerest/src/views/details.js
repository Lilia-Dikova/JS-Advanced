import { deleteIdea, getById } from '../api/data.js'

const section = document.getElementById('detailsPage');
const deleteSection = section.querySelector('.text-center');

deleteSection.remove();


export async function showDetails(context, id) {
    const idea = await getById(id);
    context.showSection(section);

    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user && user._id == idea._ownerId;
    createIdeaDiv(idea, section, isOwner);

    section.querySelector('.detb').addEventListener('click', async (e) => {
        e.preventDefault();
        const choice = confirm('Are you sure you want to delete this idea?');
        if (choice) {
            deleteIdea(id)
        }
    })
}

function createIdeaDiv(idea, section, isOwner) {
    debugger
    section.querySelector('h2').textContent = idea.title;
    section.querySelector('.det-img').src = idea.img;
    section.querySelector('.idea-description').textContent = idea.description;

    if (isOwner) {
        document.getElementById('detailsPage').appendChild(deleteSection);
    }
}


