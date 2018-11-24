import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

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

import Product from './Product'

@inject('productStore')
@inject('basketStore')
@observer
class ProductList extends Component {

    handleBuyClick = product => {
        console.log(product)
        this.props.productStore.buyProduct(product.id)
        this.props.basketStore.addProduct(product)
    }

    render() {
        const { productStore, basketStore } = this.props
        const { sortBy, filterValue, setSorting, updateFilter, soldProductsNumber } = productStore
        const { productsNumber } = basketStore
        const products = productStore.products
            .filter(item => item.name === '' || item.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
            .sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={() => setSorting('id')}>
                    Sort by Id
                </Button>
                <Button variant="outlined" color="primary" onClick={() => setSorting('name')}>
                    Sort by Name
                </Button>
                <p>
                    <input type='text' value={filterValue} onChange={(e) => updateFilter(e.target.value)} />
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
                            <Product key={product.id} product={product} onBuyClick={this.handleBuyClick} />
                        ))}
                    </TableBody>
                </Table>

                <p>Basket</p>
                <p>No. of products in basket: {productsNumber}</p>
                 {basketStore.products.map(item => <p key={item.id}>{item.product.name} {item.qty}</p>)}           
            </div>
        )
    }
}


export default ProductList
