
const views = [...document.querySelectorAll('.view-section')]
const user = [...document.querySelectorAll('.user')]
const guest = [...document.querySelectorAll('.guest')]

function hideAll () {
    views.forEach(s => s.style.display = 'none');
}

export function showView (section) {
    hideAll()
    section.style.display = 'block'
}

export function spinner () {
    const element = document.createElement('p');
    element.innerHTML = 'Loading $hellip;'
    return element;
}

export function updateNav() {

    const msgContaier = document.getElementById('welcome-msg');
    const userData = getUserData();
    
    if (userData) {
        user.forEach(e => e.style.display = 'inline-block');
        guest.forEach(e => e.style.display = 'none');
        msgContaier.textContent = `Welcome, ${userData.email}`;
    } else {
        user.forEach(e => e.style.display = 'none');
        guest.forEach(e => e.style.display = 'inline-block');
        msgContaier.textContent = '';
    }
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
};

export function saveUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
};

export function clearUserData() {
    sessionStorage.removeItem('userData');
};

export function createSubmitHandler (callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData (event.target);
        const entries = [...formData.entries()].map(([k,v]) => [k, v.trim()]);

        callback(Object.fromEntries(entries));
    }
};