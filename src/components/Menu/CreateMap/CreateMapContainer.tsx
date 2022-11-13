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
import { 
    menuChapters, createMapDimentionsChapter, createMapFixButtonChapter,
    endChapter
} from '../../../redux/education-reducer'

import { getMapHeight, getMapWidth } from '../../../redux/map-selectors'
import { getIsFixBackgroundItems, getIsFreeMovement } from '../../../redux/backgrounds-selectors'
import { getBorders, getGrid, getGridSize } from '../../../redux/options-selectors'
import { getIsCreateMapFixButtonChapter, getIsCreateMapMenuChapter } from '../../../redux/education-selectors'

import CreateMap from './CreateMap'

type MapStateToProps = {
    mapWidth: number
    mapHeight: number
    gridSize: number

    borders: boolean
    grid: boolean
    isFreeMovement: boolean
    isFixBackgroundItems: boolean

    isCreateMapMenuChapter: boolean
    isCreateMapFixButtonChapter: boolean
}

type MapDispatchToProps = {
    cleanMap: () => void
    cleanLines: () => void
    updateMapDimensions: (width: number, height: number) => void

    onBorders: (borders: boolean) => void
    onGrid: (grid: boolean) => void

    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
    onFreeMovement: (isFreeMovement: boolean) => void
    onFixBackgroundItems: () => void

    menuChapters: (icon: string) => void
    createMapDimentionsChapter: (isDimentionsChapter: boolean) => void
    createMapFixButtonChapter: (isCreateMapFixButtonChapter: boolean) => void
    endChapter: (isEndChapter: boolean) => void
}

type OwnProps = {}

type CreateMapContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const CreateMapContainer: FC<CreateMapContainerProps> = ({ mapWidth, mapHeight, gridSize, isFreeMovement,
    borders, grid, isFixBackgroundItems, cleanMap, updateMapDimensions, cleanLines,
    onBorders, onGrid, updateBackgroundItems, onFixBackgroundItems, onFreeMovement,
    isCreateMapMenuChapter, isCreateMapFixButtonChapter, menuChapters, createMapDimentionsChapter,
    createMapFixButtonChapter, endChapter }) => {

    React.useEffect(() => {}, [isFixBackgroundItems])

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

    const onCreateMap = () => {
        cleanMap()
        cleanLines()

        updateBackgroundItems([])

        if (isCreateMapMenuChapter) {
        menuChapters('')
        createMapDimentionsChapter(true)
        updateMapDimensions(250, 250)
        
    }
    else {
        updateMapDimensions(Math.round(width / gridSize) * gridSize, Math.round(height / gridSize) * gridSize)
    }

        !borders && onBorders(true)
        !grid && onGrid(true)
    }

    const onFixClick = () => {
        onFixBackgroundItems()

        if (isCreateMapFixButtonChapter) {
            createMapFixButtonChapter(false)
            endChapter(true)
        }
    }
    
    return <CreateMap width={width} height={height} gridSize={gridSize}
    onCreateMap={onCreateMap} onChangeWidth={onChangeWidth} onChangeHeight={onChangeHeight}
        isFixBackgroundItems={isFixBackgroundItems} onFixClick={onFixClick}
        onChangeMapDimensions={onChangeMapDimensions} onFreeMovement={onFreeMovement} 
        isFreeMovement={isFreeMovement} />
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),
        gridSize: getGridSize(state),
        isFreeMovement: getIsFreeMovement(state),
        isFixBackgroundItems: getIsFixBackgroundItems(state),
        borders: getBorders(state),
        grid: getGrid(state),

        isCreateMapMenuChapter: getIsCreateMapMenuChapter(state),
        isCreateMapFixButtonChapter: getIsCreateMapFixButtonChapter(state)
    }
}

export default connect(MapStateToProps, {
    updateMapDimensions, cleanMap, addNewBackgroundItemOnMap, onBorders,
    onGrid, updateBackgroundItems, onFixBackgroundItems, onFreeMovement, cleanLines,
    menuChapters, createMapDimentionsChapter, createMapFixButtonChapter, endChapter
}
)(CreateMapContainer)