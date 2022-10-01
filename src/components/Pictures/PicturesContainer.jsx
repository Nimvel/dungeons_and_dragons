import React from 'react';
import { connect } from 'react-redux';
import { saveNewPicture } from '../../redux/pictures-reducer'
import Pictures from './Pictures';

const PicturesContainer = (props) => {
    React.useEffect(() => {}, []);

    return <Pictures saveNewPicture={props.saveNewPicture} pictures={props.pictures} />
}

const mapStateToProps = (state) => {
    return {
        pictures: state.picturesPage.pictures
    }
}

export default connect(mapStateToProps, { saveNewPicture })(PicturesContainer);