import React from 'react';
import { connect } from 'react-redux';
import { saveNewPicture } from '../../redux/pictures-reducer'
import { setNewMap } from '../../redux/map-reducer'
import Pictures from './Pictures';

const PicturesContainer = (props) => {
    React.useEffect(() => {}, []);

    return <Pictures saveNewPicture={props.saveNewPicture} pictures={props.pictures} setNewMap={props.setNewMap} />
}

const mapStateToProps = (state) => {
    return {
        pictures: state.picturesPage.pictures
    }
}

export default connect(mapStateToProps, { saveNewPicture, setNewMap })(PicturesContainer);