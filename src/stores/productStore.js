import { observable, action, runInAction } from 'mobx'


class ProductStore {
    @observable products = [
        { id: 0, name: 'Cofee', tags: ['White', 'Black'], isSold: false },
        { id: 1, name: 'Apple', tags: ['Red', 'Green'], isSold: false },
        { id: 2, name: 'Box', tags: ['Yellow', 'Blue'], isSold: false }
    ]

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

    fetchData() {
        return new Promise(() => 1)
    }

    @action async getData() {
        try {
            const response = await this.fetchData()
            runInAction(() => {
                this.buyProduct(response)
            })
        } catch (error) {
            alert(error)
        }
    }

}

export default new ProductStore();