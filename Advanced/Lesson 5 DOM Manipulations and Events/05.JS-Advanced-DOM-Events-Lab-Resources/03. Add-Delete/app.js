function addItem() {
    let input = document.getElementById('newItemText');

    if (input.value.length == 0){
        return;
    }

    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    const list = document.getElementById('items');
    list.appendChild(liElement);

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';

    liElement.appendChild(deleteBtn);

    
    
    deleteBtn.addEventListener('click', erase);

    function erase (event){
        const liElement = event.target.parentElement;
        liElement.remove();
    }
    input.value = "";
}