const btnRegister = document.querySelector('button');
btnRegister.addEventListener('click', onRegistration);

async function onRegistration(ev) {
    ev.preventDefault();
    const form = document.querySelector('form');
    let formData = new FormData(form);

    let { email, password, rePass } = Object.fromEntries(formData.entries())

    if (email == '') {
        throw new Error('Email is required!');
    }

    if (password === '') {
        throw new Error('Password is required!');
    }

    if (password !== rePass) {
        throw new Error('Passwords must be equal!');
    }

    try {
        const response = await fetch('http://localhost:3030/users/register',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
    } catch (err) {
        alert(err.message);
    }

}
