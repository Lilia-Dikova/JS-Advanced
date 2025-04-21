import { logout } from './data/users.js';
import { page } from './lib.js';
import { updateNav } from './util.js';
import { showEvents } from './views/catalog.js';
import { showCreateEvent } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEditEvent } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

updateNav();

page('/', showHome);
page('/market', showEvents);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreateEvent);
page('/market/:id', showDetails);
page('/edit/:id', showEditEvent);
page();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    logout();
    updateNav();
    page.redirect('/');

});