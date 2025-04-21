import {post} from './requests.js'
import {showView,updateNav} from './nav.js'

export function onRegister() {
    let form = document.getElementById('register-form');
    form.addEventListener('submit', onReg);
}

async function onReg(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let userData = Object.fromEntries(formData.entries());

    const email = userData.email.trim();
    const password = userData.password.trim();
    const repeatPassword = userData.password.trim();

    let url = 'http://localhost:3030/users/register';


    if (email == '') {
        return alert('Please, enter email!');
    }
    if (password.length < 6) {
        return alert('Password should be at least 6 characters long!');
    }
    if (password !== repeatPassword) {
        return alert('The repeat password should be equal to the password');
    }


    let data = post(url,userData);

    sessionStorage.setItem('userData', JSON.stringify(data));
    showView('form-login');
    updateNav();
}



