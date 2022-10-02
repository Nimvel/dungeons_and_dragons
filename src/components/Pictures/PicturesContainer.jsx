import React from 'react';
import { connect } from 'react-redux';
import { saveNewPicture, deletePicture } from '../../redux/pictures-reducer'
import { setNewMap } from '../../redux/map-reducer'
import Pictures from './Pictures';

const PicturesContainer = (props) => {
    React.useEffect(() => {}, [props.pictures]);

    return <Pictures saveNewPicture={props.saveNewPicture} pictures={props.pictures} setNewMap={props.setNewMap} deletePicture={props.deletePicture} />
}

const mapStateToProps = (state) => {
    return {
        pictures: state.picturesPage.pictures
    }
}

export default connect(mapStateToProps, { saveNewPicture, setNewMap, deletePicture })(PicturesContainer);