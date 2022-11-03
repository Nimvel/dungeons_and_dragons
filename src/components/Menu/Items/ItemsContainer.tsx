import React, { FC } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

import {
    addNewCircle, updateItems, ItemType
} from '../../../redux/map-reducer'
import { 
    getItemColor, getItems, getMapHeight, getMapWidth, getItemsQuantity
} from '../../../redux/map-selectors'
import { AppStateType } from '../../../redux/store'

import Items from './Items'

type MapStateToPropsType = {
    mapWidth: number
    mapHeight: number

    items: Array<ItemType>
    itemColor: string
    itemsQuantity: number
}

type MapDispatchToPropsType = {
    addNewCircle: (quantity: number, color: string) => void
    updateItems: (items: Array<ItemType>) => void
}

type OwnPropsType = {
}

type ItemsContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const ItemsContainer: FC<ItemsContainerProps> = ({ mapWidth, mapHeight, items, itemColor, itemsQuantity, addNewCircle, updateItems }) => {

    const [newQuantity, setQuantity] = useState(itemsQuantity)
    const [newColor, setColor] = useState(itemColor)

    const onChangeQuantity = (e: any) => {
        setQuantity(e.target.value)
    }

    const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    const generateItems = (items: Array<ItemType>, newQuantity: number, newColor: string) => {
        const circles: Array<ItemType> = []
        for (let i = 1; i <= newQuantity; i++) {
            circles.push({
                x: Math.random() * (mapWidth - 100) + 50,
                y: Math.random() * (mapHeight - 100) + 50,
                id: 'item-' + (items.length + i),
                color: newColor
            })
        }
        updateItems(items.concat(circles))
    }

    const onAddNewCircle = () => {
        addNewCircle(newQuantity, newColor)
        generateItems(items, newQuantity, newColor)
    }

    return <Items itemColor={newColor} onAddNewCircle={onAddNewCircle} 
    onChangeQuantity={onChangeQuantity} onChangeColor={onChangeColor}  />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),

        itemColor: getItemColor(state),
        itemsQuantity: getItemsQuantity(state),
        items: getItems(state)
    }
}

export default connect(mapStateToProps,
    { addNewCircle, updateItems }
)(ItemsContainer)