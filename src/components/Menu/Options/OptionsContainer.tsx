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

    grid: boolean
    gridColor: string
    gridSize: number
}

type MapDispatchToPropsType = {
    showGrid: () => void
    hideGrid: () => void
    changeGridColor: (e: any) => void
    changeGridSize: (newSize: number) => void
}

type OwnPropsType = {
}

type OptionsContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const OptionsContainer: FC<OptionsContainerProps> = (
    { mapWidth, mapHeight, grid, gridColor, gridSize, 
        showGrid, hideGrid, changeGridColor, changeGridSize }) => {

    const [newSize, setSize] = useState(gridSize)
    const [fullscreen, setFullscreen] = useState(false)

    const onChangeGridSize = (e: any) => {
        setSize(e.target.value)
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


    return <Options grid={grid} gridColor={gridColor} fullscreen={fullscreen}
    onChangeGridSize={onChangeGridSize} updateGridSize={updateGridSize}
        onChangeGridColor={onChangeGridColor} onShowGrid={showGrid} onHideGrid={hideGrid}
        onFullscreen={openFullscreen} offFullscreen={closeFullscreen} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),
        grid: getGrid(state),
        gridColor: getGridColor(state),
        gridSize: getGridSize(state)
    }
}

export default connect(mapStateToProps,
    {showGrid, hideGrid, changeGridColor, changeGridSize}
)(OptionsContainer)