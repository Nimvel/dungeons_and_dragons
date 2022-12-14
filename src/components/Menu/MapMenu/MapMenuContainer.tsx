import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import { BackgroundItemOnMapType, updateBackgroundItems } from '../../../redux/map-reducer'
import { saveNewPicture, deletePicture, PicturesType } from '../../../redux/pictures-reducer'
import { setNewMap } from '../../../redux/map-reducer'
import { cleanLines } from '../../../redux/paint-reducer'
import { menuChapters, endChapter } from '../../../redux/education-reducer'
import { onBorders, onGrid } from '../../../redux/options-reducer'

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

    onBorders: (borders: boolean) => void
    onGrid: (grid: boolean) => void
}

type OwnProps = {}

type MapMenuContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const MapMenuContainer: FC<MapMenuContainerProps> = ({ pictures, cleanLines,
    saveNewPicture, setNewMap, deletePicture, updateBackgroundItems, 
    isMapMenuChapter, menuChapters, endChapter, onBorders, onGrid }) => {

        if (isMapMenuChapter) {
            onBorders(false)
            onGrid(false)
        }

    React.useEffect(() => { }, [pictures])

    const addNewPicture = (e: any) => {
        e.target.files.length && saveNewPicture(e.target.files[0])
    }

    const onPictureClick = (picture) => {
        updateBackgroundItems([])
        cleanLines()
        setNewMap(picture)

        if (isMapMenuChapter) {
            menuChapters('')
            endChapter(true)
        }
    }

    const onCrossClick = (id) => {
        deletePicture(id)
    }

    return <MapMenu onPictureClick={onPictureClick} onCrossClick={onCrossClick}
        pictures={pictures} addNewPicture={addNewPicture} />
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        pictures: getPictures(state),
        isMapMenuChapter: getIsMapMenuChapter(state)
    }
}

export default connect(mapStateToProps, {
    saveNewPicture, setNewMap, deletePicture, updateBackgroundItems, 
    cleanLines, menuChapters, endChapter, onBorders, onGrid
})(MapMenuContainer)