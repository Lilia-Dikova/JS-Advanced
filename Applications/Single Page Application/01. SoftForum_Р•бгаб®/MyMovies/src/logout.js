import { get } from './requests.js'

export async function onLogOut() {
    
        let url = `http://localhost:3030/users/logout`
    
        await get (url);

        sessionStorage.removeItem('userData');
        window.location = '/';
}

