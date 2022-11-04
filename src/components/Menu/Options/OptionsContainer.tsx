import React, { FC } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

import {
    showBorders, hideBorders, changeBordersColor, showGrid, 
    hideGrid, changeGridColor, changeGridSize, onSameColors
} from '../../../redux/options-reducer'
import {
    getGridColor, getGridSize, getGrid, getBorders, getBordersColor, getIsSameColors
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
}

type MapDispatchToPropsType = {
    showBorders: () => void
    hideBorders: () => void
    changeBordersColor: (e: any) => void

    showGrid: () => void
    hideGrid: () => void
    changeGridColor: (e: any) => void
    changeGridSize: (newSize: number) => void

    onSameColors: () => void
}

type OwnPropsType = {
}

type OptionsContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const OptionsContainer: FC<OptionsContainerProps> = (
    { borders, bordersColor, grid, gridColor, gridSize, isSameColors,
        showBorders, hideBorders, changeBordersColor,
        showGrid, hideGrid, changeGridColor, changeGridSize, onSameColors }) => {

    const [newSize, setSize] = useState(gridSize)
    const [fullscreen, setFullscreen] = useState(false)

    const onChangeBordersColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isSameColors) {
            changeGridColor(e.target.value)
            changeBordersColor(e.target.value)
        }
        else {
            changeBordersColor(e.target.value)
        }
    }

    const onChangeGridSize = (e: any) => {
        setSize(e.target.value)
    }

    const onChangeGridColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isSameColors) {
            changeGridColor(e.target.value)
            changeBordersColor(e.target.value)
        }
        else {
            changeGridColor(e.target.value)
        }
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


    return <Options borders={borders} bordersColor={isSameColors ? gridColor : bordersColor} grid={grid} gridColor={gridColor}
        fullscreen={fullscreen} onChangeGridSize={onChangeGridSize} updateGridSize={updateGridSize}
        onChangeBordersColor={onChangeBordersColor} onShowBorders={showBorders} onHideBorders={hideBorders}
        onChangeGridColor={onChangeGridColor} onShowGrid={showGrid} onHideGrid={hideGrid}
        onFullscreen={openFullscreen} offFullscreen={closeFullscreen} isSameColors={isSameColors} onSameColors={onSameColors} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        borders: getBorders(state),
        bordersColor: getBordersColor(state),

        grid: getGrid(state),
        gridColor: getGridColor(state),
        gridSize: getGridSize(state),

        isSameColors: getIsSameColors(state)
    }
}

export default connect(mapStateToProps,
    { showBorders, hideBorders, changeBordersColor, showGrid, hideGrid, changeGridColor, changeGridSize, onSameColors }
)(OptionsContainer)