import React from 'react'
import ReactDOM from 'react-dom'

export const mount = (container) => {
    ReactDOM.render(<h1>Henlo!</h1>, container)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}