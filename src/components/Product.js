import React from 'react'
import { observer } from 'mobx-react'

import { Button, Chip } from '@material-ui/core'

import {
    TableCell,
    TableRow,
} from '@material-ui/core';


const Product = (props) => {

    const { onBuyClick } = props
    const { id, name, tags, isSold } = props.product

    const handleClick = () => {
        console.log(props.product)
        onBuyClick(props.product)
    }

    return (
        <TableRow>
            <TableCell>
                <span>{id}</span>
            </TableCell>

            <TableCell>
                <span style={{ textDecoration: isSold ? 'line-through' : 'none' }}>{name}: </span>
            </TableCell>
            <TableCell>
                {tags.map(tag =>
                    <Chip key={tag} label={tag} variant="default" color="secondary" />
                )}
            </TableCell>
            <TableCell>
                <Button variant="outlined" color="secondary" onClick={handleClick}>
                    Buy
                </Button>
            </TableCell>
        </TableRow>

    )
}

export default observer(Product)