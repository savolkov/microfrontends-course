import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow'

const productsEl = document.querySelector('#my-products')
mountProducts(productsEl)

const cartEl = document.querySelector('#my-cart')
mountCart(cartEl)
