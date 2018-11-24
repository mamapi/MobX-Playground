import React, { Component } from 'react'
import { Product } from './Product'

export class ProductList extends Component {
    state = {
        products: [
            { id: 0, name: 'Apple' },
            { id: 1, name: 'Cofee' },
        ]
    }

    render() {
        const { products } = this.state
        return (
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Product  {...product} />
                    </li>
                ))}
            </ul>
        )
    }
} 
