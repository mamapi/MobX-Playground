import React from 'react'
import { Provider } from 'mobx-react'

import productStore from '../stores/productStore'
import ProductList from '../components/ProductList'

export const Root = () => (
    <Provider productStore={productStore}>
        <ProductList />
    </Provider>
)

