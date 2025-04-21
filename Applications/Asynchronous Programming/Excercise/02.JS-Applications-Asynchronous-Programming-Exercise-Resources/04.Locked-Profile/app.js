let profile = document.querySelector('.profile');
let main = document.getElementById('main');

async function lockedProfile() {
    let url = `http://localhost:3030/jsonstore/advanced/profiles`;

    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error: ${response.status} (${response.statusText})`);
    }
    let userData = await response.json();
    let counter = 1;
    profile.remove();

    for (const user in userData) {
        let name = (userData[user].username);
        let email = (userData[user].email);
        let age = (userData[user].age);

        if (name, email, age) {

            let newDiv = profile.cloneNode(true);

            newDiv.querySelector('input[name="user1Username"]').value = name;
            newDiv.querySelector('input[name="user1Email"]').value = email;
            newDiv.querySelector('input[name="user1Age"]').value = age;
            newDiv.querySelector('input[name="user1Age"]').type = "email";
            
            for (const child of newDiv.children) {
                if (child.name) {
                    child.name = child.name.replace(child.name.substring(4, 5), counter);
                }
                if (child.className == 'user1Username') {
                    child.setAttribute("id", `user1HiddenFields`)
                    child.style.display = "none";
                }
            }

            main.appendChild(newDiv);
            counter++;

            let btnShow = newDiv.getElementsByTagName('button')[0];
            btnShow.addEventListener('click', await onHit);
        }
    }

    async function onHit(e) {
        e.preventDefault;
        let element = e.target.parentElement

        if (element.children[2].checked) {
            return;
        }
        if (element.children[10].textContent == "Show more") {
            element.children[9].style.display = 'block';
            element.children[10].textContent = "Hide it"
        } else {
            element.children[9].style.display = 'none';
            element.children[10].textContent = "Show more"
        }
    }
}


