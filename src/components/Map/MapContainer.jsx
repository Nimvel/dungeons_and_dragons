import { connect } from 'react-redux';
import Map from './Map';
import { setNewMap, updateItems } from '../../redux/map-reducer'
import React from 'react';



const MapContainer = (props) => {
    let [items, setItems] = React.useState(props.items);

    const updateItems = () => {
        setItems(props.items);
    }

    React.useEffect(() => { updateItems() }, [props.quantity, props.color, props.items]);

    return <div>
        <Map map={props.map} items={items} setNewMap={props.setNewMap}
            setItems={setItems}
        />
    </div>
}

const mapStateToProps = (state) => {
    return {
        map: state.mapPage.map,
        items: state.mapPage.items,
        color: state.mapPage.color,
        quantity: state.mapPage.quantity
    }
}

export default connect(mapStateToProps, { setNewMap, updateItems })(MapContainer);