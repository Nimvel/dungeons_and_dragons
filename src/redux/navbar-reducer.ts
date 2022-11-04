const map_item = require('./../assets/navbarItems/map_item.png')
const create_map_item = require('./../assets/navbarItems/create_map_item.png')
const items_item = require('./../assets/navbarItems/items_item.png')
const dice_item = require('./../assets/navbarItems/dice_item.png')
const paint_item = require('./../assets/navbarItems/paint_item.png')
const options_item = require('./../assets/navbarItems/options_item.png')

export type ItemType = {
    id: number
    item: string
}

type initialStateType = {
    items: Array<ItemType>
}

const initialState = {
    items: [
        { id: 0, item: map_item },
        { id: 1, item: create_map_item },
        { id: 2, item: items_item },
        { id: 3, item: dice_item },
        { id: 4, item: paint_item },
        { id: 5, item: options_item },
    ]
}

const navbarReducer = (state = initialState, action): initialStateType => {
    switch (action.type) {

        default:
            return state
    }
}

export default navbarReducer