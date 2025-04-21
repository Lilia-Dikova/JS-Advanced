import { showHomeView } from './home.js';
import { showLoginView } from './login.js';
import { init, showView } from './nav.js';
import { showCreateView } from './create.js'
import { showDetailsView } from './details.js';
import './create.js';
import './login.js';


const views = {
    'home-link': showHomeView,
    'login-link': showLoginView,
    'create-link': showCreateView,
    'details-link': showDetailsView
};

init(views)



document.getElementById('loading').remove();
document.getElementById('hidden').remove();

showView('home-link');