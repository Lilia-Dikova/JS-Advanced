document.getElementById('submit').addEventListener('click', onSubmit);
const url = `http://localhost:3030/jsonstore/collections/students`;

window.addEventListener('load', loadStudents);

async function onSubmit(e) {

    e.preventDefault();
    let form = document.getElementById('form');
    let formData = new FormData(form);
    const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(formData.entries());

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }
    try {
        let request = await fetch(url, {
            method: 'post',
            body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
        });

        if (!request.ok) {
            let err = request.json();
            throw new Error(err.message);
        }

    } catch (err) {
        alert(err.message);
    }
    form.reset();
};

async function loadStudents () {
    try {
        const request = await fetch(url);

        const data = await request.json();
        if (!request.ok) {
            throw new Error(data.message);
        }

        document.querySelector('table#results tbody')
            .replaceChildren(...Object.values(data)
                .map(createTableRow));
    } catch (err) {
        alert(err.message);
    }
}

function createTableRow(data) {
    const tr = document.createElement('tr');
    tr.appendChild(createElement(data.firstName));
    tr.appendChild(createElement(data.lastName));
    tr.appendChild(createElement(data.facultyNumber));
    tr.appendChild(createElement(data.grade));
    return tr;
}

function createElement(data) {
    const cell = document.createElement('td');
    cell.textContent = data;
    return cell;
}

