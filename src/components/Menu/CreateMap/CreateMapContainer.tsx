import * as React from 'react'
import { FC, useState } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import {
    cleanMap, updateMapDimensions, addNewBackgroundItemOnMap,
    BackgroundItemOnMapType, updateBackgroundItems
} from '../../../redux/map-reducer'
import {
    onFixBackgroundItems, onFreeMovement
} from '../../../redux/backgrounds-reducer'
import { onBorders, onGrid } from '../../../redux/options-reducer'
import { cleanLines } from '../../../redux/paint-reducer'

import { getMapHeight, getMapWidth } from '../../../redux/map-selectors'
import { getIsFixBackgroundItems, getIsFreeMovement } from '../../../redux/backgrounds-selectors'
import { getBorders, getGrid, getGridSize } from '../../../redux/options-selectors'

import CreateMap from './CreateMap'

type MapStateToProps = {
    mapWidth: number
    mapHeight: number
    gridSize: number

    borders: boolean
    grid: boolean
    isFreeMovement: boolean
    isFixBackgroundItems: boolean
}

type MapDispatchToProps = {
    cleanMap: () => void
    cleanLines: () => void
    updateMapDimensions: (width: number, height: number) => void

    onBorders: () => void
    onGrid: () => void

    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
    onFreeMovement: () => void
    onFixBackgroundItems: () => void
}

type OwnProps = {}

type CreateMapContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const CreateMapContainer: FC<CreateMapContainerProps> = ({ mapWidth, mapHeight, gridSize, isFreeMovement,
    borders, grid, isFixBackgroundItems, cleanMap, updateMapDimensions, cleanLines,
    // addNewBackgroundItemOnMap,  
    onBorders, onGrid, updateBackgroundItems, onFixBackgroundItems, onFreeMovement }) => {

    React.useEffect(() => { }, [isFixBackgroundItems])

    const [width, setWidth] = useState(mapWidth)
    const [height, setHeight] = useState(mapHeight)

    const onChangeWidth = (e: any) => {
        setWidth(Number(e.target.value) * gridSize)
    }

    const onChangeHeight = (e: any) => {
        setHeight(Number(e.target.value) * gridSize)
    }

    const onChangeMapDimensions = () => {
        updateMapDimensions(width, height)
    }

    const onCleanMap = () => {
        cleanMap()
        cleanLines()
        updateMapDimensions(Math.round(width / gridSize) * gridSize, Math.round(height / gridSize) * gridSize)
        updateBackgroundItems([])

        !borders && onBorders()
        !grid && onGrid()
    }

    return <CreateMap width={width} height={height} gridSize={gridSize}
        onCleanMap={onCleanMap} onChangeWidth={onChangeWidth} onChangeHeight={onChangeHeight}
        isFixBackgroundItems={isFixBackgroundItems} onFixBackgroundItems={onFixBackgroundItems}
        // addNewBackgroundItemOnMap={addNewBackgroundItemOnMap} 
        onChangeMapDimensions={onChangeMapDimensions} onFreeMovement={onFreeMovement} isFreeMovement={isFreeMovement} />
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),
        gridSize: getGridSize(state),
        isFreeMovement: getIsFreeMovement(state),
        isFixBackgroundItems: getIsFixBackgroundItems(state),
        borders: getBorders(state),
        grid: getGrid(state)
    }
}

export default connect(MapStateToProps, {
    updateMapDimensions, cleanMap, addNewBackgroundItemOnMap, onBorders,
    onGrid, updateBackgroundItems, onFixBackgroundItems, onFreeMovement, cleanLines
}
)(CreateMapContainer)