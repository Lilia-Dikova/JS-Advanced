function solve() {

    document.querySelector('button')
        .addEventListener('click', addMovie);

    const ulMovies = document.querySelector('#movies ul');
    const ulArchive = document.querySelector('#archive ul');

    function createNewElement (type, value) {
        let element = document.createElement(type);
        element.textContent = value;
        return element;
    }

    function addMovie (ev) {
        ev.preventDefault()

        const inputs = Array.from(document.getElementById('container')
        .children)
        .slice(0, 3);

        const name = inputs[0].value;
        const hall = inputs[1].value;
        const ticketPrice = Number(inputs[2].value);

        if (name && hall && inputs[2].value && !isNaN(inputs[2].value)) {

            inputs.forEach(x => x.value = '');
        
        let liElement = document.createElement('li');
        liElement.appendChild(createNewElement('span', name));
        liElement.appendChild(createNewElement('strong', `Hall: ${hall}`));

        let divWrap = createNewElement('div');
        liElement.appendChild(divWrap);
        divWrap.appendChild(createNewElement('strong',ticketPrice.toFixed(2)));

        let input = document.createElement('input');
        input.placeholder = "Tickets Sold";
        divWrap.appendChild(input);

        let btnArchive = createNewElement('button', 'Archive');
        divWrap.appendChild(btnArchive);

        ulMovies.appendChild(liElement);

        btnArchive.addEventListener('click', noArchive);

        function noArchive () {
            if (input.value && !isNaN(input.value)) {

            liElement.remove();
            let liArchive = document.createElement('li');
            liArchive.appendChild(createNewElement('span', name));
            let totalPrice = ticketPrice * Number(input.value);
            liArchive.appendChild(createNewElement('strong', `Total amount: ${totalPrice.toFixed(2)}`));
            const button = createNewElement('button', 'Delete')
            liArchive.appendChild(button);
            
            button.addEventListener('click', onDelete);
            ulArchive.appendChild(liArchive);
            
            function onDelete() {
                liArchive.remove();
            }
        }
        }
    }
}
Array.from(document.querySelectorAll('button'))
.filter(x=>x.textContent ==='Clear')
.forEach(btn=>btn.addEventListener('click', ()=>Array.from(ulArchive.children).forEach(li=>li.remove())));
}
