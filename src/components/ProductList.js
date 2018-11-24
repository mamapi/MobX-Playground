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
@observer
class ProductList extends Component {

    render() {
        const { productStore } = this.props
        const { sortBy, filterValue, buyProduct, setSorting, updateFilter } = productStore
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
                            <Product key={product.id} {...product} onBuyClick={buyProduct} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}


export default ProductList
