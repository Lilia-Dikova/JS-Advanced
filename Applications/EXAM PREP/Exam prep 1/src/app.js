import { page } from './lib.js';
import { showEvents } from './views/catalog.js';

// REMOVE THESE AFTER TESTING
//import * as api from './data/events.js';
//import * as userApi from './data/users.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { logout } from './data/users.js';
import { updateNav } from './util.js';
import { showCreateEvent } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEditEvent } from './views/edit.js';
updateNav();

page('/', showHome);
page('/catalog',showEvents);
page('/login',showLogin);
page('/register',showRegister);
page('/create', showCreateEvent);
page('/catalog/:id', showDetails);
page('/edit/:id', showEditEvent);
page();


document.getElementById('logoutBtn').addEventListener('click', async () => {
    logout();
    updateNav();
    page.redirect('/');

});
// REMOVE THESE AFTER TESTING
//window.api = api;
//window.userApi = userApi;
