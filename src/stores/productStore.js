import { observable } from 'mobx'


class ProductStore {
    @observable products = [
        { id: 0, name: 'Cofee', tags: ['White', 'Black'], isSold: false },
        { id: 1, name: 'Apple', tags: ['Red', 'Green'], isSold: false },
        { id: 2, name: 'Box', tags: ['Yellow', 'Blue'], isSold: false }
    ]

    @observable sortBy = 'id'
    @observable filterValue = ''

}

export default new ProductStore()