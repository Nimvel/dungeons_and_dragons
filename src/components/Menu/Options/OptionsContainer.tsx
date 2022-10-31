import React, { FC } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

import { addNewCircle, updateItems, showGrid, hideGrid, changeGridColor, changeGridSize, ItemType } from '../../../redux/map-reducer'
import { getItemColor, getGridColor, getGridSize, getItems, getMapHeight, getMapWidth, getItemsQuantity } from '../../../redux/map-selectors'
import { AppStateType } from '../../../redux/store'

import Options from './Options'

type MapStateToPropsType = {
    mapWidth: number
    mapHeight: number

    items: Array<ItemType>
    itemColor: string
    itemsQuantity: number

    gridColor: string
    gridSize: number
}

// type GenerateItemsType = (items: Array<ItemType>, newQuantity: number, newColor: string) => Array<ItemType>

type MapDispatchToPropsType = {
    addNewCircle: (quantity: number, color: string) => void
    updateItems: (items: Array<ItemType>) => void
    showGrid: () => void
    hideGrid: () => void
    changeGridColor: (e: any) => void
    changeGridSize: (newSize: number) => void
}

type OwnPropsType = {
}

type OptionsContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const OptionsContainer: FC<OptionsContainerProps> = (
    { mapWidth, mapHeight, itemColor, gridColor, gridSize, itemsQuantity, items,
        addNewCircle, updateItems, showGrid, hideGrid, changeGridColor, changeGridSize }) => {

    const [newQuantity, setQuantity] = useState(itemsQuantity)
    const [newColor, setColor] = useState(itemColor)
    const [newSize, setSize] = useState(gridSize)

    // React.useEffect(() => { setColor(itemColor) }, [itemColor]);
    // React.useEffect(() => { setQuantity(itemsQuantity) }, [itemsQuantity]);

    // React.useEffect(() => { updateItems(generateItems(items, newQuantity, newColor)) }, [itemsQuantity, itemColor])

    const onChangeQuantity = (e: any) => {
        setQuantity(e.target.value)
    }

    const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    const onChangeGridSize = (e: any) => {
        setSize(e.target.value)
    }

    const generateItems = (items: Array<ItemType>, newQuantity: number, newColor: string) => {
        const circles: Array<ItemType> = []
        for (let i = 1; i <= newQuantity; i++) {
            circles.push({
                x: Math.random() * (mapWidth - 100) + 50,
                y: Math.random() * (mapHeight - 100) + 50,
                id: 'node-' + (items.length + i),
                color: newColor
            })
        }
        updateItems(items.concat(circles))
    }

    const onAddNewCircle = () => {
        addNewCircle(newQuantity, newColor)
        generateItems(items, newQuantity, newColor)
    }

    const onShowGrid = () => {
        showGrid()
    }

    const onHideGrid = () => {
        hideGrid()
    }

    const onChangeGridColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeGridColor(e.target.value)
    }

    const updateGridSize = () => {
        changeGridSize(newSize)
    }

    const elem = document.documentElement

    const openFullscreen = () => {
        if (elem.requestFullscreen) {
            elem.requestFullscreen()
            // } else if (elem.mozRequestFullscreen) {
            //     elem.mozRequestFullscreen()
            // } else if (elem.webkitRequestFullscreen) {
            //     elem.webkitRequestFullscreen()
        }
    }

    const closeFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen()
            // } else if (document.webkitExitFullscreen) { /* Safari */
            //     document.webkitExitFullscreen()
            // } else if (document.msExitFullscreen) { /* IE11 */
            //     document.msExitFullscreen()
        }
    }

    const onFullscreen = () => {
        openFullscreen()
    }

    const offFullscreen = () => {
        closeFullscreen()
    }

    return <Options itemColor={newColor} gridColor={gridColor} onAddNewCircle={onAddNewCircle} onChangeQuantity={onChangeQuantity}
        onChangeColor={onChangeColor} onChangeGridSize={onChangeGridSize} updateGridSize={updateGridSize}
        onChangeGridColor={onChangeGridColor} onShowGrid={onShowGrid} onHideGrid={onHideGrid}
        onFullscreen={onFullscreen} offFullscreen={offFullscreen} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),
        itemColor: getItemColor(state),
        itemsQuantity: getItemsQuantity(state),
        gridColor: getGridColor(state),
        gridSize: getGridSize(state),
        items: getItems(state)
    }
}

export default connect(mapStateToProps,
    { addNewCircle, updateItems, showGrid, hideGrid, changeGridColor, changeGridSize }
)(OptionsContainer)