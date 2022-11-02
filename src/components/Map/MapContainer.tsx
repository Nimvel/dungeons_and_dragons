import * as React from 'react'
import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import Map from './Map'

import { AppStateType } from '../../redux/store'

import { ItemType, updateItems, updateMapDimensions } from '../../redux/map-reducer'

import { getItems, getMap, getMapHeight, getMapWidth } from '../../redux/map-selectors'

import { getGridSize } from '../../redux/options-selectors'

import './../../App.scss'
import { getLineMode, getPaintbrushColor, getPensilMode } from '../../redux/paint-selectors'

type MapStateToPropsType = {
    map: string
    mapWidth: number
    mapHeight: number
    gridSize: number

    items: Array<ItemType>

    paintbrushColor: string
    pensilMode: boolean
    lineMode: boolean
}

type MapDispatchToPropsType = {
    updateItems: (items: Array<ItemType>) => void
    updateMapDimensions: (mapWidth: number, mapHeight: number) => void
}

type OwnPropsType = {
}

type MapContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const MapContainer: FC<MapContainerProps> = ({ map, mapWidth, mapHeight, gridSize, items, updateItems, updateMapDimensions,
    paintbrushColor, pensilMode, lineMode
}) => {

    const mapDimensions = () => {
        const $ = require("jquery")
        $("<img/>").attr('src', map)
            .on('load', function () {
                updateMapDimensions(this.width, this.height)
            })
    }

    useEffect(() => {}, [mapWidth, mapHeight])
    useEffect(() => { mapDimensions() }, [map])

    return <div className='map'>
        <Map map={map} items={items} mapWidth={mapWidth} mapHeight={mapHeight} gridSize={gridSize} updateItems={updateItems}
        paintbrushColor={paintbrushColor} pensilMode={pensilMode} lineMode={lineMode} />
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        map: getMap(state),
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),

        items: getItems(state),
        gridSize: getGridSize(state),

        paintbrushColor: getPaintbrushColor(state),
        pensilMode: getPensilMode(state),
        lineMode: getLineMode(state)
    }
}

export default connect(mapStateToProps, { updateItems, updateMapDimensions })(MapContainer)