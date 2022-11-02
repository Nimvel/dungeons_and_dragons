import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import { getMapHeight, getMapWidth } from '../../../redux/map-selectors'

import { getGrid, getGridColor, getGridSize } from '../../../redux/options-selectors'

import HorizontalLines from './HorizontalLines'
import VerticalLines from './VerticalLines'

type GridContainerProps = {
    mapWidth: number
    mapHeight: number

    grid: boolean
    gridColor: string
    gridSize: number
}

const GridContainer: FC<GridContainerProps> = ({ mapWidth, mapHeight, grid, gridColor, gridSize }) => {
    return grid && 
    <>
            <HorizontalLines gridColor={gridColor} width={mapWidth} height={mapHeight} gridSize={gridSize} />
            <VerticalLines gridColor={gridColor} width={mapWidth} height={mapHeight} gridSize={gridSize} />
        </>
}

const mapStateToProps = (state: AppStateType): GridContainerProps => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),

        grid: getGrid(state),
        gridColor: getGridColor(state),
        gridSize: getGridSize(state)
    }
}

export default connect(mapStateToProps, {})(GridContainer)