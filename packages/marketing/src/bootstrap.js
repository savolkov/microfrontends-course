import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
export const mount = (container) => {
    ReactDOM.render(<App />, container)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}