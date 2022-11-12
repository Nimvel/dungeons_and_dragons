import React, { FC } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { saveNewItemImage, deleteItemImage, itemImagesType } from '../../../redux/itemImages-reducer'
import { getItemImages } from '../../../redux/itemImages-selectors'

import {
    addNewCircle, addNewItemWithImage, updateItems, ItemType
} from '../../../redux/map-reducer'

import {
    getItemColor, getItems, getMapHeight, getMapWidth
} from '../../../redux/map-selectors'
import { AppStateType } from '../../../redux/store'

import Items from './Items'

type MapStateToPropsType = {
    mapWidth: number
    mapHeight: number

    items: Array<ItemType>
    itemImages: Array<itemImagesType>
    itemColor: string
}

type MapDispatchToPropsType = {
    addNewCircle: (quantity: number, color: string) => void
    updateItems: (items: Array<ItemType>) => void

    saveNewItemImage: (itemImage: Blob | MediaSource) => void
    deleteItemImage: (id: number) => void
    addNewItemWithImage: (itemImage: string) => void
}

type OwnPropsType = {
}

type ItemsContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const ItemsContainer: FC<ItemsContainerProps> = ({ mapWidth, mapHeight,
    items, itemColor, itemImages, addNewCircle, updateItems,
    saveNewItemImage, deleteItemImage, addNewItemWithImage }) => {

    const [newQuantity, setQuantity] = useState(1)
    const [newColor, setColor] = useState(itemColor)

    const onChangeQuantity = (e: any) => {
        setQuantity(e.target.value)
    }

    const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    const xMin = ((window.innerWidth - mapWidth) / 2)
    const xMax = xMin + mapWidth

    const yMin = ((window.innerHeight - mapHeight) / 2)
    const yMax = yMin + mapHeight


    const generateItems = (items: Array<ItemType>, newQuantity: number, newColor: string) => {
        const circles: Array<ItemType> = []
        for (let i = 1; i <= newQuantity; i++) {
            circles.push({
                x: Math.random() * (xMax - xMin - 50) + xMin + 25,
                y: Math.random() * (yMax - yMin - 50) + yMin + 25,
                id: 'item-' + (items.length + i),
                color: newColor,
                image: null
            })
        }
        updateItems(items.concat(circles))
    }

    const onAddNewCircle = () => {
        addNewCircle(newQuantity, newColor)
        generateItems(items, newQuantity, newColor)
    }

    return <Items itemColor={newColor} newQuantity={newQuantity} onAddNewCircle={onAddNewCircle} itemImages={itemImages}
        onChangeQuantity={onChangeQuantity} onChangeColor={onChangeColor} saveNewItemImage={saveNewItemImage}
        deleteItemImage={deleteItemImage} addNewItemWithImage={addNewItemWithImage} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),

        itemColor: getItemColor(state),
        items: getItems(state),
        itemImages: getItemImages(state)
    }
}

export default connect(mapStateToProps, {
    addNewCircle, updateItems, saveNewItemImage, deleteItemImage, addNewItemWithImage
})(ItemsContainer)