window.addEventListener('load', onLoad);
const baseUrl = `http://localhost:3030/jsonstore/collections/books`;
let form = document.querySelector('form')

async function onLoad() {
    try {
        let res = await fetch(baseUrl);

        if (!res.ok) {
            let err = res.json();
            throw new Error(err.message);
        }
        let data = await res.json();
        console.log(data)

        document.querySelector("tbody")
            .replaceChildren(...
                Object.entries(data)
                    .map(addNewBook));

    } catch (err) {
        alert(err.message);
    }
}

function addNewBook(data) {
    let [id, { author, title }] = data;

    let tr = document.createElement('tr');
    tr.appendChild(createElement('td', title));
    tr.appendChild(createElement('td', author));
    let td = createElement('td');
    td.appendChild(createElement('button', 'Edit', id));
    td.appendChild(createElement('button', 'Delete', id));

    tr.append(td)
    return tr;
}

function createElement(type, content, id) {
    let el = document.createElement(type);
    el.textContent = content;
    if (content == "Edit") {
        el.addEventListener('click', onEdit);
        el.dataset.id = id;
    } else if (content == "Delete") {
        el.dataset.id = id;
        el.addEventListener('click', onDelete)
    }
    return el;
}

document.querySelector('form button').addEventListener('click', onSubmit)

async function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let { author, title } = Object.fromEntries(formData.entries());

    if (e.target.textContent == 'Save') {

        try {
            let urlUpdate = baseUrl + '/' + form.dataset.id;
            let req = await fetch(urlUpdate, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ author, title })
            })
            if (!req.ok) {
                let err = await req.json();
                throw new Error(err.message);
            }
        } catch (err) {
            alert(err.message)
        }
        e.target.textContent = "Submit"
    }
    else {

        try {
            let req = await fetch(baseUrl, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ author, title })
            });
            if (!req.ok) {
                let err = await req.json();
                throw new Error(err.message);
            }

        } catch (err) {
            alert(err.message);
        }
    }

    await onLoad();
    form.reset()
}

async function onEdit(e) {
    e.preventDefault();
    document.querySelector('form button').textContent = "Save";
    document.querySelector('h3').textContent = "Edit FORM"
    let info = e.target.parentElement.parentElement.querySelectorAll('td')
    let author = document.querySelector('input[name="author"]').value = info[1].textContent;
    let title = document.querySelector('input[name="title"]').value = info[0].textContent;

    form.dataset.id = e.target.dataset.id;


}


async function onDelete(e) {
    e.preventDefault();

    let urlDelete = baseUrl + '/' + e.target.dataset.id;

    try {
        let req = await fetch(urlDelete, {
            method: 'delete'
        });
        if (!req.ok) {
            let err = await req.json();
            throw new Error(err.message);
        }
        e.target.parentElement.parentElement.remove()
    } catch (err) {
        alert(err.message)
    }
}