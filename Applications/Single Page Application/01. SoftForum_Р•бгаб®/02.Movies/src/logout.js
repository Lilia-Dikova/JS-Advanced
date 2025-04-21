import { loginPage } from './login.js';
import { get } from './request.js'
import { updateNav } from './util.js';

export async function logout() {
    
        let url = `http://localhost:3030/users/logout`;
        let userData = JSON.parse(sessionStorage.getItem("userData"));

        try {
            const response = await fetch('http://localhost:3030/users/logout', {
                method: "GET", headers: {'X-Authorization': userData.accessToken}
            });
    
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
    
            sessionStorage.removeItem('userData');
            
            updateNav();
            loginPage()
        } catch (err) {
            alert(err.message);
        }
    

}