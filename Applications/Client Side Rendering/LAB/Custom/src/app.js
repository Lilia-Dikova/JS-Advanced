import { showHome } from "./view/home.js";
import {showRegister} from "./view/register.js"
import {onNavigate, visit} from "./view/nav.js"


document.querySelector('nav').addEventListener('click', onNavigate)
visit('home')
