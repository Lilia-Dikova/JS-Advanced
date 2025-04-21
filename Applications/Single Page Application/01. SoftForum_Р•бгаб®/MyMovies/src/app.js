import {showView,updateNav} from './nav.js'
import {onRegister} from './register.js'
import {onLogin} from './login.js'
import {onLogOut} from './logout.js'

document.querySelector('[href=register]').addEventListener('click', event => showView('form-sign-up', onRegister, event));
document.querySelector('[href=login]').addEventListener('click', event => showView('form-login', onLogin, event));
document.querySelector('[href=logout]').addEventListener('click', event => showView('form-login', onLogOut, event));
document.querySelector('[href=/]').addEventListener('click', event => showView('home', ShowHome, event));


updateNav();
showView('home-page');


