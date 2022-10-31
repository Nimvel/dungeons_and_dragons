import * as React from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import { ItemType, updateItems, 
    // updateActiveCircleId,
     updateMapDimensions } from '../../redux/map-reducer'
import './../../App.scss'
import {
    // getActiveCircleId,
    getGrid, getGridColor, getGridSize,
    getItems, getMap, getMapHeight, getMapWidth
} from '../../redux/map-selectors'
import { AppStateType } from '../../redux/store'
import { FC } from 'react'

type MapStateToPropsType = {
    map: string
    mapWidth: number
    mapHeight: number
    // isMenuActive: boolean

    items: Array<ItemType>
    // activeCircleId: null | string

    grid: boolean
    gridColor: string
    gridSize: number
}

type MapDispatchToPropsType = {
    updateItems: (items: Array<ItemType>) => void
    // updateActiveCircleId: (activeCircleId: string) => void
    updateMapDimensions: (mapWidth: number, mapHeight: number) => void
}

type OwnPropsType = {
}

type MapContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const MapContainer: FC<MapContainerProps> = ({ map, mapWidth, mapHeight, items, 
    // activeCircleId,
    grid, gridColor, gridSize, updateItems, 
    // updateActiveCircleId, 
    updateMapDimensions }) => {

    const mapDimensions = () => {
        const $ = require("jquery")
        $("<img/>").attr('src', map)
            .on('load', function () {
                updateMapDimensions(this.width, this.height)
            })
    }

    React.useEffect(() => { mapDimensions() }, [map])

    return <div className='map'>
        <Map map={map} items={items}
        //  activeCircleId={activeCircleId}
          grid={grid} gridColor={gridColor} gridSize={gridSize}
            mapWidth={mapWidth} mapHeight={mapHeight} updateItems={updateItems}
            //  updateActiveCircleId={updateActiveCircleId}
              />
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        map: getMap(state),
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),

        items: getItems(state),
        // activeCircleId: getActiveCircleId(state),

        grid: getGrid(state),
        gridColor: getGridColor(state),

        gridSize: getGridSize(state)
    }
}

export default connect(mapStateToProps, { updateItems, 
    // updateActiveCircleId, 
    updateMapDimensions })(MapContainer)