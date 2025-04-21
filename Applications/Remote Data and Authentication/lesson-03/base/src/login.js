window.addEventListener('load', start)

function start() {
    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit)

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const email = data.email.trim();
        const password = data.password.trim();

        let url = `http://localhost:3030/users/login`;

        try {
            let response = await fetch(url, {
                method: 'post',
                headers: { 'Content-Type': `application/json` },
                body: JSON.stringify({email, password})
            });

            if (!response.ok) {
                let err = await response.json();
                throw new Error(err.message)
            }

            let userData = await response.json();
            localStorage.setItem('user', JSON.stringify(userData));

            window.location = '/'

        } catch (err) {
            alert(err.message)
        }
    }
}