async function loadData() {
    const main = document.getElementById('main');



    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const data = await getData(url);

    data.forEach(fillAccordion)
}

window.addEventListener('load', loadData);

async function getData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error: ${response.status} (${response.statusText})`);
    }

    return await response.json();
}

function ce(type, attributes, ...content) {
    
    const result = document.createElement(type);

    Object.entries(attributes || {})
        .forEach(([attribute, value]) => {
            if (isEventListener(attribute)) {
                result.addEventListener(attribute.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attribute] = value;
            }
        });

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (isElement(e)) {
            result.appendChild(e);
        } else {
            const node = document.createTextNode(e);
            result.appendChild(node);
        }
    });

    return result;

    function isEventListener(attr) {
        return attr.substring(0, 2).localeCompare('on') === 0;
    }

    function isElement(element) {
        return typeof element != 'string' && typeof element != 'number';
    }
}