import React from 'react'
import { Provider } from 'mobx-react'
import { configure, autorun } from 'mobx';
import DevTools from 'mobx-react-devtools'

import productStore from '../stores/productStore'
import basketStore from '../stores/basketStore'
import ProductList from '../components/ProductList'

autorun(() => {
    const { soldProductsNumber } = productStore
    console.log('soldProductsNumber::', soldProductsNumber)
})


export const Root = () => (
    <div>
        <Provider productStore={productStore} basketStore={basketStore}>
            <ProductList />
        </Provider>

        {/* <DevTools /> */}
    </div>
)

