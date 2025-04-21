import { showHome } from "./home.js";
import { showRegister } from "./register.js";


const views = {
    'home': showHome,
    'register':showRegister

}

export function onNavigate (event) {
    if (event.target.tagName == 'A'){
        event.preventDefault();
        const view = views[event.target.id]
        view();
    }
}
export function visit (id) {
    const view = views[id];
    view();
}