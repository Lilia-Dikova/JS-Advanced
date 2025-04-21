const url = 'http://localhost:3030/jsonstore/phonebook';

function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);


    async function onLoad(e) {
        e.preventDefault();
        const list = document.getElementById('phonebook');
        list.innerHTML = '';
       
        try {
            let request = await fetch(url);

            if (!request.ok) {
                let err = await request.json();
                throw new Error(err.message);
            }
            let data = await request.json();

            Object.values(data)
            .map(createRow)
            .forEach(row => list.appendChild(row));

        } catch (err) {
            alert(err.message)
        }
    }

    async function onCreate(e) {
        e.preventDefault();

        let person = document.getElementById('person');
        let phone = document.getElementById('phone');

        if (!(person.value && phone.value)) return;

        let body = {
            person: person.value,
            phone: phone.value
        }

        try {
            let req = await fetch(url, {
                method: 'post',
                headers: ({ 'Content-Type': `application/json` }),
                body: JSON.stringify(body)
            });
            if (!req.ok) {
                let err = await req.json();
                throw new Error(err.message);
            }
            await onLoad(new Event('click'));

        } catch (err) {
            alert(err.message)
        }

        phone.value = '';
        person.value = ''

    }

    async function onDelete(e) {
        e.preventDefault();
        let urlDelete = url + '/' + e.target.dataset.id;

        try {
            const response = await fetch(urlDelete, {
                method: 'DELETE'
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }
            await response.json();

            e.target.parentElement.remove();

        } catch (err) {
            alert(err.message);
        }
    }

    function createRow(data) {
        const row = document.createElement('li');
        row.textContent = `${data.person}: ${data.phone}`;
        const btn = document.createElement('button');
        btn.dataset.id = data._id;
        btn.textContent = 'Delete';
        btn.addEventListener('click', onDelete);
        row.appendChild(btn);
        return row;
    }
}

attachEvents();