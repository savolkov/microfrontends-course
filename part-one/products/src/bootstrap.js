import faker from 'faker'

export const mount = (el) => {
    let products = ''

    for (let i = 0; i < 5; i++) {
        products += `<div>${faker.commerce.productName()}</div>`
    }

    el.innerHTML = products
}

if (process.env.NODE_ENV === 'development') {
    const el =document.querySelector('#dev-products')
    if (el) {
        mount(el)
    }
}