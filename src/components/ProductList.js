import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { Button, Checkbox } from '@material-ui/core'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel
} from '@material-ui/core';

import productStore from '../stores/productStore'
import Product from './Product'

@observer
class ProductList extends Component {
    handleBuyClick = id => {
        const productToBeSold = productStore.products.find(p => p.id === id)
        productToBeSold.isSold = true
    }

    render() {
        const { sortBy, filterValue } = productStore
        const products = productStore.products
            .filter(item => item.name === '' || item.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
            .sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={() => productStore.sortBy = 'id'}>
                    Sort by Id
                </Button>
                <Button variant="outlined" color="primary" onClick={() => productStore.sortBy = 'name'}>
                    Sort by Name
                </Button>
                <p>
                    <input type='text' value={filterValue} onChange={(e) => this.setState({ filter: e.target.value })} />
                </p>


                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Tags</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(product => (
                            <Product key={product.id} {...product} onBuyClick={this.handleBuyClick} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}


export default ProductList
