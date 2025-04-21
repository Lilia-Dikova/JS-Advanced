function attachEvents() {

    let btnSubmit = document.getElementById('submit');
    let btnRefresh = document.getElementById('refresh');
    let textArea = document.getElementById('messages');
    const url = 'http://localhost:3030/jsonstore/messenger';

    btnRefresh.addEventListener('click', onRefresh);
    btnSubmit.addEventListener('click', onSubmit);


    async function onSubmit(e) {
        e.preventDefault();

        let authorName = document.querySelector('input[name="author"]').value;
        let msgText = document.querySelector('input[name="content"]').value;

        let body = {
            author: authorName,
            content: msgText
        }

        try {
            let req = await fetch(url, {
                method: 'post',
                headers: ({ 'Content-Type': `application/json` }),
                body: JSON.stringify(body)
            })

            if (!req.ok) {
                let err = await req.json();
                throw new Error(err.message)
            }
            
        } catch (err) {
            alert(err.message)
        }
    }

    async function onRefresh (e) {
        e.preventDefault();

        try {
            let response = await fetch(url)
            let data = await response.json();

            if (!response.ok) {
                let err = await response.json();
                throw new Error(err.message)
            }

            debugger;

            let textContent = Object.values(data)
            .map(({author, content}) => `${author}: ${content}`)
            .join('\n');
            
            textArea.textContent = textContent;
            
        } catch (err) {
            alert(err.message)
        }
    }
}

attachEvents();