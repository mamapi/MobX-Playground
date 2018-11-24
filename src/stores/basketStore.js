import { observable, action, computed } from 'mobx'


class BasketStore {
    @observable products = []

    @computed get productsNumber() {
        return this.products.length
    }

    @action addProduct = product => {
        const item = this.products.find(p => p.product.id === product.id)
        if (item) {
            item.qty++
        } else {
            this.products.push({
                id: product.id,
                product,
                qty: 1
            })
        }
    }
}

export default new BasketStore();