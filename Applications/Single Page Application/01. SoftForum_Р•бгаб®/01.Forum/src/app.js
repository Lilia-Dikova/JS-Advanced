import { showHomeView } from './home.js';
//import {showView} from './nav.js'
//import './login.js';
//import './create.js';

const views = {
    'mini-navbar-wrap': ['home-view', showHomeView],
    'login-link': ['login-view'],
    'create-link': ['create-view']
};

for (const linkId in views) {
    const [sectinoId, callback] = views[linkId];
    document.querySelector(linkId).addEventListener('click', event => showView(sectinoId, callback, event))
}


document.getElementById('loading').remove();
showView('home-view', showHomeView);