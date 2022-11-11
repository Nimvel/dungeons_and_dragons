import * as React from 'react'
import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import Map from './Map'

import { AppStateType } from '../../redux/store'

import {
    BackgroundItemOnMapType, ItemType, updateItems, updateBackgroundItems,
    updateMapDimensions, addNewBackgroundItemOnMap
} from '../../redux/map-reducer'

import { BackgroundItemType } from '../../redux/backgrounds-reducer'
import { drawLine, LineType } from '../../redux/paint-reducer'
import { 
    createMapItemsChapter, createMapMoveItemsChapter, createMapFreeButtonChapter, 
    createMapFixButtonChapter 
} from '../../redux/education-reducer'

import {
    getBackgroundItemOnMap, getItems,
    getMap, getMapHeight, getMapWidth
} from '../../redux/map-selectors'

import { getBackgroundsItems, getClickedItemId, getIsFixBackgroundItems, getIsFreeMovement } from '../../redux/backgrounds-selectors'

import { getGridSize } from '../../redux/options-selectors'

import { getLineMode, getPaintbrushColor, getPensilMode, getLines, getStrokeWidth } from '../../redux/paint-selectors'
import { getIsCreateMapFreeButtonChapter, getIsCreateMapItemsChapter, getIsCreateMapMoveItemsChapter } from '../../redux/education-selectors'

type MapStateToPropsType = {
    map: null | string
    mapWidth: number
    mapHeight: number
    gridSize: number

    items: Array<ItemType>
    backgroundItems: Array<BackgroundItemType>
    backgroundItemsOnMap: Array<BackgroundItemOnMapType>
    clickedItemId: null | string
    isFreeMovement: boolean
    isFixBackgroundItems: boolean

    paintbrushColor: string
    strokeWidth: number
    pensilMode: boolean
    lineMode: boolean
    lines: Array<LineType>

    isCreateMapItemsChapter: boolean
    isCreateMapMoveItemsChapter: boolean
    isCreateMapFreeButtonChapter: boolean
}

type MapDispatchToPropsType = {
    updateItems: (items: Array<ItemType>) => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
    updateMapDimensions: (mapWidth: number, mapHeight: number) => void

    drawLine: (line: LineType) => void
    addNewBackgroundItemOnMap: (backgroundItemOnMap: string, x: number, y: number) => void

    createMapItemsChapter: (isCreateMapItemsChapter: boolean) => void
    createMapMoveItemsChapter: (isCreateMapMoveItemsChapter: boolean) => void
    createMapFreeButtonChapter: (isCreateMapFreeButtonChapter: boolean) => void
    createMapFixButtonChapter: (isCreateMapFixButtonChapter: boolean) => void

}

type OwnPropsType = {
}

type MapContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const MapContainer: FC<MapContainerProps> = ({ map, mapWidth, mapHeight, gridSize, items,
    backgroundItemsOnMap, isFreeMovement, paintbrushColor, strokeWidth, pensilMode, lineMode,
    isFixBackgroundItems, updateItems, updateMapDimensions, updateBackgroundItems, clickedItemId,
    lines, drawLine, addNewBackgroundItemOnMap, backgroundItems,
    isCreateMapItemsChapter, isCreateMapMoveItemsChapter, isCreateMapFreeButtonChapter,
    createMapItemsChapter, createMapMoveItemsChapter,
    createMapFreeButtonChapter, createMapFixButtonChapter }) => {

    const mapDimensions = () => {
        if (map) {
            const $ = require("jquery")
            $("<img/>").attr('src', map)
                .on('load', function () {
                    updateMapDimensions(this.width, this.height)
                })
        }
    }

    useEffect(() => { }, [mapWidth, mapHeight, backgroundItemsOnMap])
    useEffect(() => { mapDimensions() }, [map])

    return <>
        <Map map={map} items={items} backgroundItemsOnMap={backgroundItemsOnMap} isFreeMovement={isFreeMovement}
            mapWidth={mapWidth} mapHeight={mapHeight} gridSize={gridSize} updateItems={updateItems}
            updateBackgroundItems={updateBackgroundItems} isFixBackgroundItems={isFixBackgroundItems}
            paintbrushColor={paintbrushColor} pensilMode={pensilMode} lineMode={lineMode} 
            addNewBackgroundItemOnMap={addNewBackgroundItemOnMap} backgroundItems={backgroundItems}
            lines={lines} drawLine={drawLine} strokeWidth={strokeWidth} clickedItemId={clickedItemId} 

            isCreateMapItemsChapter={isCreateMapItemsChapter} isCreateMapMoveItemsChapter={isCreateMapMoveItemsChapter}
            isCreateMapFreeButtonChapter={isCreateMapFreeButtonChapter}
            createMapItemsChapter={createMapItemsChapter} createMapMoveItemsChapter={createMapMoveItemsChapter}
            createMapFreeButtonChapter={createMapFreeButtonChapter} createMapFixButtonChapter={createMapFixButtonChapter} />
    </>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        map: getMap(state),
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),

        backgroundItems: getBackgroundsItems(state),
        backgroundItemsOnMap: getBackgroundItemOnMap(state),
        clickedItemId: getClickedItemId(state),
        isFreeMovement: getIsFreeMovement(state),
        isFixBackgroundItems: getIsFixBackgroundItems(state),

        items: getItems(state),
        gridSize: getGridSize(state),

        paintbrushColor: getPaintbrushColor(state),
        strokeWidth: getStrokeWidth(state),
        pensilMode: getPensilMode(state),
        lineMode: getLineMode(state),
        lines: getLines(state),

        isCreateMapItemsChapter: getIsCreateMapItemsChapter(state),
        isCreateMapMoveItemsChapter: getIsCreateMapMoveItemsChapter(state),
        isCreateMapFreeButtonChapter: getIsCreateMapFreeButtonChapter(state)
    }
}

export default connect(mapStateToProps, {
    updateItems, updateMapDimensions, updateBackgroundItems, drawLine, addNewBackgroundItemOnMap, 
    createMapItemsChapter, createMapMoveItemsChapter, createMapFreeButtonChapter, createMapFixButtonChapter
})(MapContainer)