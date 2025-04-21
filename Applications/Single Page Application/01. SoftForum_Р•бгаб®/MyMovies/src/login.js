import { post } from './requests.js'
import { updateNav,showView } from './nav.js'


export function onLogin() {
    let form = document.getElementById('login-form');
    form.addEventListener('submit', onLog);
}

async function onLog(event) {
    event.preventDefault();

    debugger;

    let formData = new FormData(event.target);
    const enteredData = Object.fromEntries(formData.entries());

    if (!enteredData.email || !enteredData.password){
        alert ('Please enter valid login credentials!');
    } 

    let url = `http://localhost:3030/users/login`;

    const userData = await post (url, enteredData);

    if (userData) {
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = '/'
        
    }
    else {
        event.target.reset()
    }
}


