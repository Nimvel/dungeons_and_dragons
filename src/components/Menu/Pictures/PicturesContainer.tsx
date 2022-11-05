import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'
import { BackgroundItemOnMapType, updateBackgroundItems } from '../../../redux/map-reducer'
import { saveNewPicture, deletePicture, PicturesType } from '../../../redux/pictures-reducer'
import { getPictures } from '../../../redux/pictures-selectors'
import { setNewMap } from '../../../redux/map-reducer'

//@ts-ignore
import Pictures from './Pictures.tsx'

type MapStateToProps = {
    pictures: Array<PicturesType>
}

type MapDispatchToProps = {
    saveNewPicture: (picture: Blob | MediaSource) => void
    setNewMap: (map: string) => void
    deletePicture: (id: number) => void

    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
}

type OwnProps = {}

type PicturesContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const PicturesContainer: FC<PicturesContainerProps> = ({ pictures, 
    saveNewPicture, setNewMap, deletePicture, updateBackgroundItems }) => {
    React.useEffect(() => {}, [pictures])

    return <Pictures pictures={pictures} updateBackgroundItems={updateBackgroundItems}
    saveNewPicture={saveNewPicture} setNewMap={setNewMap} deletePicture={deletePicture} />
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        pictures: getPictures(state)
    }
}

export default connect(mapStateToProps, { saveNewPicture, setNewMap, deletePicture, updateBackgroundItems })(PicturesContainer)