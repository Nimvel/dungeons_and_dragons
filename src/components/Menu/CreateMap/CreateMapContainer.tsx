import * as React from 'react'
import { FC, useState } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import { 
    cleanMap, updateMapDimensions, addNewBackgroundItemOnMap, 
    BackgroundItemOnMapType, updateBackgroundItems 
} from '../../../redux/map-reducer'
import { 
    saveNewBackgroundItem, deleteBackgroundItem, onFixBackgroundItems, onFreeMovement
} from '../../../redux/backgrounds-reducer'
import { BackgroundItemType } from '../../../redux/backgrounds-reducer'
import { onBorders, onGrid } from '../../../redux/options-reducer'

import { getMapHeight, getMapWidth } from '../../../redux/map-selectors'
import { getBackgroundsItems, getIsFixBackgroundItems, getIsFreeMovement } from '../../../redux/backgrounds-selectors'
import { getBorders, getGrid, getGridSize } from '../../../redux/options-selectors'

import CreateMap from './CreateMap'

type MapStateToProps = {
    mapWidth: number
    mapHeight: number
    gridSize: number

    borders: boolean
    grid: boolean
    backgroundItems: Array<BackgroundItemType>
    isFreeMovement: boolean
    isFixBackgroundItems: boolean
}

type MapDispatchToProps = {
    cleanMap: () => void
    updateMapDimensions: (width: number, height: number) => void

    saveNewBackgroundItem: (backgroundItem: Blob | MediaSource) => void
    deleteBackgroundItem: (id: number) => void
    addNewBackgroundItemOnMap: (backgroundItem: string) => void

    onBorders: () => void
    onGrid: () => void

    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
    onFreeMovement: () => void
    onFixBackgroundItems: () => void
}

type OwnProps = {}

type CreateMapContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const CreateMapContainer: FC<CreateMapContainerProps> = ({ mapWidth, mapHeight, gridSize, backgroundItems, isFreeMovement,
    borders, grid, isFixBackgroundItems, cleanMap, updateMapDimensions, saveNewBackgroundItem, deleteBackgroundItem,
    addNewBackgroundItemOnMap,  onBorders, onGrid, updateBackgroundItems, onFixBackgroundItems, onFreeMovement }) => {

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
        updateMapDimensions(width, height)
        updateBackgroundItems([])

        !borders && onBorders()
        !grid && onGrid()
    }

    return <CreateMap width={width} height={height} gridSize={gridSize} backgroundItems={backgroundItems}
        onCreateMap={onCreateMap} onChangeWidth={onChangeWidth} onChangeHeight={onChangeHeight} 
        isFixBackgroundItems={isFixBackgroundItems} onFixBackgroundItems={onFixBackgroundItems} 
        saveNewBackgroundItem={saveNewBackgroundItem} deleteBackgroundItem={deleteBackgroundItem}
        addNewBackgroundItemOnMap={addNewBackgroundItemOnMap} updateBackgroundItems={updateBackgroundItems}
        onChangeMapDimensions={onChangeMapDimensions} onFreeMovement={onFreeMovement} isFreeMovement={isFreeMovement} />
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),
        gridSize: getGridSize(state),
        backgroundItems: getBackgroundsItems(state),
        isFreeMovement: getIsFreeMovement(state),
        isFixBackgroundItems: getIsFixBackgroundItems(state),
        borders: getBorders(state),
        grid: getGrid(state)
    }
}

export default connect(MapStateToProps, {
    updateMapDimensions, cleanMap, saveNewBackgroundItem, deleteBackgroundItem, addNewBackgroundItemOnMap, 
    onBorders, onGrid, updateBackgroundItems, onFixBackgroundItems, onFreeMovement
}
)(CreateMapContainer)