import { observable, action, computed, autorun } from 'mobx'


class ProductStore {
    @observable products = [
        { id: 0, name: 'Cofee', tags: ['White', 'Black'], isSold: false },
        { id: 1, name: 'Apple', tags: ['Red', 'Green'], isSold: false },
        { id: 2, name: 'Box', tags: ['Yellow', 'Blue'], isSold: false }
    ]

    @computed get soldProductsNumber() {
        return this.products.filter(p => p.isSold).length
    }

    @observable sortBy = 'id'
    @observable filterValue = ''

    @action buyProduct = id => {
        const productToBeSold = this.products.find(p => p.id === id)
        productToBeSold.isSold = true
    }

    @action setSorting = field => {
        this.sortBy = field
    }

    @action updateFilter = value => {
        this.filterValue = value
    }


}
const store = new ProductStore();
autorun(() => console.log('soldProductsNumber::', store.soldProductsNumber))

export default store