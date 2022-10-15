import * as React from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import { setNewMap, updateItems, updateMapDimensions } from '../../redux/map-reducer'
import './../../App.scss'

const MapContainer = (props) => {
    let [items, setItems] = React.useState(props.items)
    let [width, setWidth] = React.useState(props.mapWidth)
    let [height, setHeight] = React.useState(props.mapHeight)

    const updateItems = () => {
        setItems(props.items)
    }

    const mapDimensions = () => {
        const $ = require("jquery")
            $("<img/>").attr('src', props.map)
                .on('load', function () {
                    setWidth(this.width)
                    setHeight(this.height)
                });
    }

    React.useEffect(() => { mapDimensions() }, [])
    React.useEffect(() => { props.updateMapDimensions(width, height) }, [width, height])
    React.useEffect(() => { updateItems() }, [props.quantity, props.color, props.items, props.gridSize]);

    return <div className='map'>
        <Map map={props.map} items={items} grid={props.grid} gridColor={props.gridColor} gridSize={props.gridSize}
            mapWidth={props.mapWidth} mapHeight={props.mapHeight}
            updateItems={props.updateItems} setNewMap={props.setNewMap} setItems={setItems} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        map: state.mapPage.map,
        mapWidth: state.mapPage.mapWidth,
        mapHeight: state.mapPage.mapHeight,
        items: state.mapPage.items,
        color: state.mapPage.color,
        quantity: state.mapPage.quantity,
        grid: state.mapPage.grid,
        gridColor: state.mapPage.gridColor,
        gridSize: state.mapPage.gridSize
    }
}

export default connect(mapStateToProps, { setNewMap, updateItems, updateMapDimensions })(MapContainer);