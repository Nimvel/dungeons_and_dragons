import { connect } from 'react-redux';
import Map from './Map.tsx';
import { setNewMap, updateItems } from '../../redux/map-reducer.ts'
import React from 'react';

const MapContainer = (props) => {
    let [items, setItems] = React.useState(props.items);

    const updateItems = () => {
        setItems(props.items);
    }

    React.useEffect(() => { updateItems() }, [props.quantity, props.color, props.items]);

    return <div>
        <Map map={props.map} items={items} grid={props.grid} gridColor={props.gridColor}
            updateItems={props.updateItems} setNewMap={props.setNewMap} setItems={setItems} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        map: state.mapPage.map,
        items: state.mapPage.items,
        color: state.mapPage.color,
        quantity: state.mapPage.quantity,
        grid: state.mapPage.grid,
        gridColor: state.mapPage.gridColor
    }
}

export default connect(mapStateToProps, { setNewMap, updateItems })(MapContainer);