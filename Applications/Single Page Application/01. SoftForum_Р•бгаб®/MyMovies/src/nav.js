const userData = JSON.parse(sessionStorage.getItem('userData'));

export function showView(sectionId, callback, event) {
    event?.preventDefault();

    document.querySelectorAll('section').forEach(s => s.style.display = "none");
    if (sectionId) {
        document.getElementById(sectionId).style.display = 'block';
    }

    if (typeof (callback) == 'function') {
        callback()
    }
}

export function updateNav() {

    let userNav = document.querySelectorAll(`li.user`);
    let guestNav = document.querySelectorAll(`li.guest`);   

    if (!userData) {
        userNav.forEach(s => s.style.display = "none");
    } else {
        guestNav.forEach(s => s.style.display = 'none');
        document.getElementById('welcome-msg').textContent = userData.email;
    }
}