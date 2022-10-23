import * as React from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import { ItemType, updateItems, updateMapDimensions } from '../../redux/map-reducer'
import './../../App.scss'
import {
    getItemColor, getGrid, getGridColor, getGridSize,
    getItems, getMap, getMapHeight, getMapWidth, getItemsQuantity
} from '../../redux/map-selectors'
import { AppStateType } from '../../redux/store'
import { FC } from 'react'

type MapStateToPropsType = {
    map: string
    mapWidth: number
    mapHeight: number
    // isMenuActive: boolean

    items: Array<ItemType>
    itemColor: string
    itemsQuantity: number

    grid: boolean
    gridColor: string
    gridSize: number
}

type MapDispatchToPropsType = {
    updateItems: (newItems: Array<ItemType>) => void
    updateMapDimensions: (newWidth: number, newHeight: number) => void
}

type OwnPropsType = {
}

type MapContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const MapContainer: FC<MapContainerProps> = ({ map, mapWidth, mapHeight, items, itemColor,
    itemsQuantity, grid, gridColor, gridSize, updateItems, updateMapDimensions }) => {

    const [newItems, setItems] = React.useState(items)
    const [newWidth, setWidth] = React.useState(mapWidth)
    const [newHeight, setHeight] = React.useState(mapHeight)

    const update = () => {
        setItems(items)
        updateItems(newItems)
    }

    const mapDimensions = () => {
        const $ = require("jquery")
        $("<img/>").attr('src', map)
            .on('load', function () {
                setWidth(this.width)
                setHeight(this.height)
            });
    }

    React.useEffect(() => { mapDimensions() }, [])
    React.useEffect(() => { updateMapDimensions(newWidth, newHeight) }, [newWidth, newHeight])
    React.useEffect(() => { update() }, [itemsQuantity, itemColor, items, gridSize])

    return <div className='map'>
        <Map map={map} items={newItems} grid={grid} gridColor={gridColor} gridSize={gridSize}
            mapWidth={newWidth} mapHeight={newHeight} updateItems={update} />
    </div>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        // isMenuActive: getIsMenuActive(state),
        map: getMap(state),
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),

        items: getItems(state),
        itemColor: getItemColor(state),
        itemsQuantity: getItemsQuantity(state),

        grid: getGrid(state),
        gridColor: getGridColor(state),

        gridSize: getGridSize(state)
    }
}

export default connect(mapStateToProps, { updateItems, updateMapDimensions })(MapContainer)