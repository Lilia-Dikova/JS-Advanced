function extractText() {
    let list = document.getElementById("items");

    let items = Array.from(list.children);

    console.log(items[0])

    const result = items
    .map(li => li.textContent)
    .join (`\n`)

    const output = document.getElementById("result");
    output.value = result;
}


    // let list = document.getElementById("items");
    // console.log(list)
    
    // let textArea = document.getElementById('result');

    // const items = Array.from(list.children)
    // let result = [];

    // for (const item of items) {
    //     result.push(item.textContent)
    // }


    // textArea.value = result.join("\n")

    // // TODO let 