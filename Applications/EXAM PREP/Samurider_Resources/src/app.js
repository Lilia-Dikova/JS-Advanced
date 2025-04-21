import { page } from './lib.js';
import { updateNav } from './util.js';
import { showHome } from './views/home.js';
import { showMotors } from './views/catalog.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { logout } from './data/users.js';
import { showCreateEvent } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEditEvent } from './views/edit.js';

updateNav();

page('/', showHome);
page('/catalog',showMotors);
page('/login', showLogin);
page('/register', showRegister);
page('/create',showCreateEvent );
page('/catalog/:id', showDetails);
page('/edit/:id', showEditEvent);
// page('/login',showLogin);
// page('/register',showRegister);
// page('/create', showCreateEvent);
// page('/catalog/:id', showDetails);
// page('/edit/:id', showEditEvent);
page();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    logout();
    updateNav();
    page.redirect('/');
});


// document.getElementById('logoutBtn').addEventListener('click', async () => {
//     logout();
//     updateNav();
//     page.redirect('/');

// });
// REMOVE THESE AFTER TESTING
//window.api = api;
//window.userApi = userApi;
