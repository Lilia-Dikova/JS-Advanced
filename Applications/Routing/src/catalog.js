const root = document.querySelector('main')

const items = [
    {
        id: '1',
        name: 'Wiper Fluid'
    },
    {
        id: '2',
        name: 'Headlight Lamp'
    },
    {
        id: '3',
        name: 'Side Mirror, Left'
    }
]
export function showCatalog() {
    root.innerHTML = `
    <p>Catalog Page</p>
    <ul>
        ${items.map (i => `<li><a href="/catalog/${i.id}">${i.name}</a></li>`).join('\n')}
    </ul>
    `
}

export function itemNotFound() {
    root.innerHTML = `<p>Item not Found</p>`
}

export function showDetails (ctx) {
    const productId = ctx.params.id
    const item = items.find(i => i.id == productId)
    root.innerHTML = 
    `<p>Product details</p>
    <p>${item.name}</p>`
}