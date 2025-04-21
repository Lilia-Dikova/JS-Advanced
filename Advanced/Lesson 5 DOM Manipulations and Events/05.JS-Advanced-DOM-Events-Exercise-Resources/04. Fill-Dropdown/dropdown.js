function addItem() {
    const item = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    const option = document.createElement('option')

    option.textContent = item.value;
    option.value = value.value
    
    document.getElementById('menu').appendChild(option);

    item.value = '';
    value.value = '';
}