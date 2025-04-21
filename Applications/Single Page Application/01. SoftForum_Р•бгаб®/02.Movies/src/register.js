import { showView, updateNav } from './util.js'
import { post } from './request.js'
import { homePage } from './home.js';

const section = document.querySelector('#form-sign-up');
const form = section.querySelector('form');


export function registerPage() {
    showView(section);
};

form.addEventListener('submit', onRegistration);

async function onRegistration(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());

    console.log(data);

    const email = data.email.trim();
    const password = data.password.trim();
    const repeatPassword = data.password.trim();

    let url = 'http://localhost:3030/users/register';


    if (email == '') {
        return alert('Please, enter email!');
    };
    if (password.length < 6) {
        return alert('Password should be at least 6 characters long!');
    }
    if (password !== repeatPassword) {
        return alert('The repeat password should be equal to the password');
    }


    let userData = await post(url, data);

    sessionStorage.setItem('userData', JSON.stringify(userData));
    homePage();
    updateNav();
}
