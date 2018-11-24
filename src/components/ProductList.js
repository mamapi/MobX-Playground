import React, { Component } from 'react'
import Product from './Product'
import { Button } from '@material-ui/core'

class ProductList extends Component {
    state = {
        products: [
            { id: 0, name: 'Cofee', tags: ['White', 'Black'], isSold: false },
            { id: 1, name: 'Apple', tags: ['Red', 'Green'], isSold: false },
            { id: 2, name: 'Box', tags: ['Yellow', 'Blue'], isSold: false }
        ],
        sortBy: 'id',
        filter: ''
    }

    handleBuyClick = id => {
        this.setState(previousState => {
            const products = previousState.products.map(p => p.id === id ? { ...p, isSold: true } : { ...p })
            return { products }
        })
    }

    render() {
        const { sortBy, filter } = this.state
        const products = this.state.products
            .filter(item => item.name === '' || item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
            .sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={() => this.setState({ sortBy: 'id' })}>
                    Sort by Id
                </Button>
                <Button variant="outlined" color="primary" onClick={() => this.setState({ sortBy: 'name' })}>
                    Sort by Name
                </Button>
                <p>
                    <input type='text' value={this.state.filter} onChange={(e) => this.setState({ filter: e.target.value })} />
                </p>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <Product  {...product} onBuyClick={this.handleBuyClick} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default ProductList
