window.addEventListener('load', start);
let userData = JSON.parse(localStorage.getItem('user'));

function start() {
    const form = document.querySelector('form');

    if (!userData) {
        window.location = '/login.html';
        return;
    }

    form.addEventListener('submit', onCreate)
}

async function onCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const body = {
        name: data.name.trim(),
        img: data.img.trim(),
        ingredients: parseMultiLine(data.ingredients),
        steps: parseMultiLine(data.steps)
    };

 
    try {
        const url = 'http://localhost:3030/data/recipes';

        userData = JSON.parse(localStorage.getItem('user'));

        if (!userData) {
            throw new Error('You must be logged in to post recepies.');
        }
        const res = await fetch (url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify(body)
        });

        debugger;

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message)
        }

        console.log(body)
        window.location = '/';

    } catch (err) {
        alert(err.message);
    }
};

function parseMultiLine(data) {
    return data
        .split("/n")
        .map(r => r.trim())
        .filter(r => r);
}