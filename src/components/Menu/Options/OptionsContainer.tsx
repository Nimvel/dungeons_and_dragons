import React, { FC } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

import {
    addNewCircle, updateItems, showGrid, hideGrid, changeGridColor, changeGridSize, ItemType,
    addD4, deleteD4, addD6, deleteD6, addD8, deleteD8, addD10, deleteD10,
    addD12, deleteD12, addD20, deleteD20, addD100, deleteD100,
    changeDiceColor, changeDiceColorFace, changeDiceNumberColor
} from '../../../redux/map-reducer'
import { 
    getItemColor, getGridColor, getGridSize, getItems, getMapHeight, getMapWidth, getItemsQuantity, 
    getDiceColor, getDiceNumberColor, getD100, getD20, getD12, getD10, getD8, getD6, getD4, getGrid, getDiceColorFace 
} from '../../../redux/map-selectors'
import { AppStateType } from '../../../redux/store'

import Options from './Options'

type MapStateToPropsType = {
    mapWidth: number
    mapHeight: number

    items: Array<ItemType>
    itemColor: string
    itemsQuantity: number

    grid: boolean
    gridColor: string
    gridSize: number

    D4: boolean
    D6: boolean
    D8: boolean
    D10: boolean
    D12: boolean
    D20: boolean
    D100: boolean

    diceColor: string
    diceColorFace: string
    diceNumberColor: string
}

type MapDispatchToPropsType = {
    addNewCircle: (quantity: number, color: string) => void
    updateItems: (items: Array<ItemType>) => void
    showGrid: () => void
    hideGrid: () => void
    changeGridColor: (e: any) => void
    changeGridSize: (newSize: number) => void
    addD4: () => void
    deleteD4: () => void
    addD6: () => void
    deleteD6: () => void
    addD8: () => void
    deleteD8: () => void
    addD10: () => void
    deleteD10: () => void
    addD12: () => void
    deleteD12: () => void
    addD20: () => void
    deleteD20: () => void
    addD100: () => void
    deleteD100: () => void
    changeDiceColor: (color: string) => void 
    changeDiceColorFace: (color: string) => void
    changeDiceNumberColor: (color: string) => void
}

type OwnPropsType = {
}

type OptionsContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const OptionsContainer: FC<OptionsContainerProps> = (
    { mapWidth, mapHeight, itemColor, grid, gridColor, gridSize, itemsQuantity, items, 
        diceColor, diceColorFace, diceNumberColor, D4, D6, D8, D10, D12, D20, D100,
        addNewCircle, updateItems, showGrid, hideGrid, changeGridColor, changeGridSize,
        addD4, deleteD4, addD6, deleteD6, addD8, deleteD8, addD10, deleteD10,
        addD12, deleteD12, addD20, deleteD20, addD100, deleteD100,
        changeDiceColor, changeDiceNumberColor }) => {

    const [newQuantity, setQuantity] = useState(itemsQuantity)
    const [newColor, setColor] = useState(itemColor)
    const [newSize, setSize] = useState(gridSize)
    const [fullscreen, setFullscreen] = useState(false)

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
            setFullscreen(true)
            // } else if (elem.mozRequestFullscreen) {
            //     elem.mozRequestFullscreen()
            // } else if (elem.webkitRequestFullscreen) {
            //     elem.webkitRequestFullscreen()
        }
    }

    const closeFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen()
            setFullscreen(false)
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

    const onChangeDiceColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeDiceColor(e.target.value)
    }

    const onChangeDiceColorFace = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeDiceColorFace(e.target.value)
    }

    const onChangeDiceNumberColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeDiceNumberColor(e.target.value)
    }

    return <Options itemColor={newColor} grid={grid} gridColor={gridColor} fullscreen={fullscreen}
    diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} D4={D4} D6={D6} D8={D8} D10={D10} D12={D12} D20={D20} D100={D100}
    onAddNewCircle={onAddNewCircle} onChangeQuantity={onChangeQuantity}
        onChangeColor={onChangeColor} onChangeGridSize={onChangeGridSize} updateGridSize={updateGridSize}
        onChangeGridColor={onChangeGridColor} onShowGrid={onShowGrid} onHideGrid={onHideGrid}
        onFullscreen={onFullscreen} offFullscreen={offFullscreen}
        addD4={addD4} deleteD4={deleteD4} addD6={addD6} deleteD6={deleteD6} addD8={addD8} deleteD8={deleteD8}
        addD10={addD10} deleteD10={deleteD10} addD12={addD12} deleteD12={deleteD12} addD20={addD20}
        deleteD20={deleteD20} addD100={addD100} deleteD100={deleteD100}
        onChangeDiceColor={onChangeDiceColor} onChangeDiceColorFace={onChangeDiceColorFace} onChangeDiceNumberColor={onChangeDiceNumberColor} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),
        itemColor: getItemColor(state),
        itemsQuantity: getItemsQuantity(state),
        grid: getGrid(state),
        gridColor: getGridColor(state),
        gridSize: getGridSize(state),
        items: getItems(state),
        D4: getD4(state),
        D6: getD6(state),
        D8: getD8(state),
        D10: getD10(state),
        D12: getD12(state),
        D20: getD20(state),
        D100: getD100(state),
        diceColor: getDiceColor(state),
        diceColorFace: getDiceColorFace(state),
        diceNumberColor: getDiceNumberColor(state)
    }
}

export default connect(mapStateToProps,
    {
        addNewCircle, updateItems, showGrid, hideGrid, changeGridColor, changeGridSize,
        addD4, deleteD4, addD6, deleteD6, addD8, deleteD8, addD10, deleteD10,
        addD12, deleteD12, addD20, deleteD20, addD100, deleteD100,
        changeDiceColor, changeDiceColorFace, changeDiceNumberColor
    }
)(OptionsContainer)