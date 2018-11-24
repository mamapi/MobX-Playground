import React, { Component } from 'react'
import { Product } from './Product'

export class ProductList extends Component {
    state = {
        products: [
            { id: 0, name: 'Apple', tags: ['Red', 'Green'], isSold: false },
            { id: 1, name: 'Cofee', tags: ['White', 'Black'], isSold: false }
        ]
    }

    handleBuyClick = id => {
        this.setState(previousState => {
            const products = previousState.products.map(p => p.id === id ? { ...p, isSold: true } : { ...p })
            return { products }
        })
    }

    render() {
        const { products } = this.state
        return (
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Product  {...product} onBuyClick={this.handleBuyClick} />
                    </li>
                ))}
            </ul>
        )
    }
}
