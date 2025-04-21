function addItem() {
    console.log('TODO:...');


    let input = document.getElementById("newItemText");

    if(input.value.length == 0 ){
        return;
    }

    const element = document.createElement('li');
    element.textContent = input.value;
    let add = document.getElementById("items");
    input.value = "";

    add.appendChild(element)
}