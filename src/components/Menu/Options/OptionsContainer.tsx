import React, { FC } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

import {
    onBorders, onGrid, changeBordersColor, changeBothColors,
    changeGridColor, changeGridSize, onSameColors
} from '../../../redux/options-reducer'
import {
    getGridColor, getGridSize, getGrid, getBorders, getBordersColor, getIsSameColors, getBothColors
} from '../../../redux/options-selectors'
import { AppStateType } from '../../../redux/store'

import Options from './Options'

type MapStateToPropsType = {
    borders: boolean
    bordersColor: string

    grid: boolean
    gridColor: string
    gridSize: number

    isSameColors: boolean
    bothColors: string
}

type MapDispatchToPropsType = {
    onBorders: () => void
    onGrid: () => void
    changeBordersColor: (color: string) => void

    changeGridColor: (color: string) => void
    changeGridSize: (newSize: number) => void

    onSameColors: () => void
    changeBothColors: (color: string) => void
}

type OwnPropsType = {
}

type OptionsContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const OptionsContainer: FC<OptionsContainerProps> = (
    { borders, bordersColor, grid, gridColor, gridSize, isSameColors, changeBothColors, bothColors,
        onBorders, onGrid, changeBordersColor, changeGridColor, changeGridSize, onSameColors }) => {

    const elem = document.documentElement

    const [newSize, setSize] = useState(gridSize)
    const [fullscreen, setFullscreen] = useState(false)

    const [newBordersColor, setNewBordersColor] = useState(bordersColor)
    const [newGridColor, setNewGridColor] = useState(gridColor)
    const [newBothColors, setNewBothColors] = useState(bothColors)

    const onChangeBordersColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewBordersColor(e.target.value)
        changeBordersColor(e.target.value)
    }

    const onChangeGridColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewGridColor(e.target.value)
        changeGridColor(e.target.value)
    }

    const onChangeBothColors = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewBothColors(e.target.value)
        changeBothColors(e.target.value)
        changeGridColor(e.target.value)
        changeBordersColor(e.target.value)
    }

    const onSameColorsClick = () => {
        onSameColors()
        if (isSameColors) {
            changeGridColor(newGridColor)
            changeBordersColor(newBordersColor)
        }
        else {
            changeGridColor(newBothColors)
            changeBordersColor(newBothColors)
        }
    }

    const onChangeGridSize = (e: any) => {
        setSize(e.target.value)
    }
    
    const updateGridSize = () => {
        changeGridSize(newSize)
    }

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

    return <Options borders={borders} grid={grid} bordersColor={bordersColor} gridColor={gridColor}
        newBordersColor={newBordersColor} newGridColor={newGridColor} bothColors={bothColors}
        fullscreen={fullscreen} onChangeGridSize={onChangeGridSize} updateGridSize={updateGridSize}
        onChangeBordersColor={onChangeBordersColor} onBorders={onBorders} onGrid={onGrid} onChangeGridColor={onChangeGridColor}
        onFullscreen={openFullscreen} offFullscreen={closeFullscreen} isSameColors={isSameColors}
        onSameColors={onSameColorsClick} onChangeBothColors={onChangeBothColors} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        borders: getBorders(state),
        bordersColor: getBordersColor(state),

        grid: getGrid(state),
        gridColor: getGridColor(state),
        gridSize: getGridSize(state),

        isSameColors: getIsSameColors(state),
        bothColors: getBothColors(state)
    }
}

export default connect(mapStateToProps, {
    onBorders, onGrid, changeBordersColor, changeBothColors,
    changeGridColor, changeGridSize, onSameColors
}
)(OptionsContainer)