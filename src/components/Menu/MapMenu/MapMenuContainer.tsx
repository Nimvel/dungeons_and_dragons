import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import { BackgroundItemOnMapType, updateBackgroundItems } from '../../../redux/map-reducer'
import { saveNewPicture, deletePicture, PicturesType } from '../../../redux/pictures-reducer'
import { setNewMap } from '../../../redux/map-reducer'
import { cleanLines } from '../../../redux/paint-reducer'
import { menuChapters, endChapter } from '../../../redux/education-reducer'

import { getPictures } from '../../../redux/pictures-selectors'
import { getIsMapMenuChapter } from '../../../redux/education-selectors'


import MapMenu from './MapMenu'

type MapStateToProps = {
    pictures: Array<PicturesType>
    isMapMenuChapter: boolean
}

type MapDispatchToProps = {
    saveNewPicture: (picture: Blob | MediaSource) => void
    setNewMap: (map: string) => void
    deletePicture: (id: number) => void
    cleanLines: () => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
    
    menuChapters: (icon: string) => void
    endChapter: (isEndChapter: boolean) => void
}

type OwnProps = {}

type MapMenuContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const MapMenuContainer: FC<MapMenuContainerProps> = ({ pictures, cleanLines,
    saveNewPicture, setNewMap, deletePicture, updateBackgroundItems,
    isMapMenuChapter, menuChapters, endChapter }) => {

    React.useEffect(() => {}, [pictures])

    return <MapMenu pictures={pictures} updateBackgroundItems={updateBackgroundItems} cleanLines={cleanLines}
    saveNewPicture={saveNewPicture} setNewMap={setNewMap} deletePicture={deletePicture}
    isMapMenuChapter={isMapMenuChapter} menuChapters={menuChapters} endChapter={endChapter} />
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        pictures: getPictures(state),
        isMapMenuChapter: getIsMapMenuChapter(state),
    }
}

export default connect(mapStateToProps, { 
    saveNewPicture, setNewMap, deletePicture, updateBackgroundItems, cleanLines,
    menuChapters, endChapter
})(MapMenuContainer)