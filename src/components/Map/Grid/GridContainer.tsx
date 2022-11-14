import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import { getGrid, getGridColor, getGridSize } from '../../../redux/options-selectors'

import HorizontalLines from './HorizontalLines'
import VerticalLines from './VerticalLines'

type MapStateToProps = {
    grid: boolean
    gridColor: string
    gridSize: number
}

type OwnProps = {
    mapWidth: number
    mapHeight: number

    startX: number
    startY: number
}

type GridContainerProps = MapStateToProps & OwnProps

const GridContainer: FC<GridContainerProps> = ({ mapWidth, mapHeight, grid, gridColor, gridSize, startX, startY }) => {
    return grid && <>
            <HorizontalLines gridColor={gridColor} width={mapWidth} height={mapHeight} gridSize={gridSize} startX={startX} startY={startY} />
            <VerticalLines gridColor={gridColor} width={mapWidth} height={mapHeight} gridSize={gridSize} startX={startX} startY={startY} />
        </>
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        grid: getGrid(state),
        gridColor: getGridColor(state),
        gridSize: getGridSize(state)
    }
}

export default connect(mapStateToProps, {})(GridContainer)