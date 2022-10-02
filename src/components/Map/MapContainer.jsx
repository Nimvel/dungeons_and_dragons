import { connect } from 'react-redux';
import Map from './Map';
import { setNewMap } from '../../redux/map-reducer'
import React from 'react';

const MapContainer = (props) => {
    React.useEffect(() => {}, [props.map]);

    return <div>
        <Map map={props.map} setNewMap={props.setNewMap} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        map: state.mapPage.map
    }
}

export default connect(mapStateToProps, {setNewMap})(MapContainer);