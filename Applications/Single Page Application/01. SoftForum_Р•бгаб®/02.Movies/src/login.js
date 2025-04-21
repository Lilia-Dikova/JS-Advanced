import { createSubmitHandler, saveUserData, showView, updateNav } from './util.js'
import { post } from './request.js'
import { homePage } from './home.js';

const section = document.querySelector('#form-login');
const form = section.querySelector('form');

export function loginPage() {
    showView(section);
}

form.addEventListener('submit', createSubmitHandler(login));

async function login({email, password}) {

    const url = 'http://localhost:3030/users/login';

    const userData = await post (url, {email, password})

    saveUserData(userData);
        
        homePage();
        updateNav();
}




