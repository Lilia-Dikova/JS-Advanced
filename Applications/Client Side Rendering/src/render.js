const pattern = new RegExp('%%(.+?)%%', 'gm');


export async function loadTemplate (name) {
    const url = `/templates/${name}.html`;

    const res = await fetch (url);
    const templateData = await res.text();  

    return templateData;
}

export function render (template, context) {
    return template.replace (pattern, (...params) => {
        console.log(params);

        return params[0]
    })
}
