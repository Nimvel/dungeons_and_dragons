import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../../redux/store'

import {
    BackgroundItemOnMapType, updateBackgroundItems
} from '../../../../redux/map-reducer'
import {
    setClickedItemId, saveNewBackgroundItem, deleteBackgroundItem
} from '../../../../redux/backgrounds-reducer'
import { BackgroundItemType } from '../../../../redux/backgrounds-reducer'
import { createMapFillChapter, createMapItemsChapter } from '../../../../redux/education-reducer'

import { getBackgroundsItems, getClickedItemId } from '../../../../redux/backgrounds-selectors'
import { getIsCreateMapFillChapter } from '../../../../redux/education-selectors'

import AddPictureButton from '../../../AddPictureButton/AddPictureButton'
import BackgroundItem from './BackgroundItem'

//@ts-ignore
import s from '../../Menu.module.scss'

type MapStateToProps = {
    backgroundItems: Array<BackgroundItemType>
    clickedItemId: string

    isCreateMapFillChapter: boolean
}

type MapDispatchToProps = {
    saveNewBackgroundItem: (backgroundItem: Blob | MediaSource) => void
    deleteBackgroundItem: (id: string) => void

    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void

    setClickedItemId: (clickedItemId: null | string) => void

    createMapFillChapter: (isCreateMapFillChapter: boolean) => void
    createMapItemsChapter: (isCreateMapItemsChapter: boolean) => void
}

type OwnProps = {
    width: number
    height: number
    gridSize: number
}

type BackgroundItemContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const BackgroundItemContainer: FC<BackgroundItemContainerProps> = ({ width, height, gridSize, backgroundItems,
    clickedItemId, saveNewBackgroundItem, deleteBackgroundItem, updateBackgroundItems, setClickedItemId, 
    isCreateMapFillChapter, createMapFillChapter, createMapItemsChapter  }) => {

    const addNewBackground = (e: any) => {
        e.target.files.length && saveNewBackgroundItem(e.target.files[0])
    }

    const backgroundElements = backgroundItems.map(b => <BackgroundItem key={b.id} 
        width={width} height={height} gridSize={gridSize} id={b.id} setClickedItemId={setClickedItemId}
        backgroundItem={b.backgroundItem} updateBackgroundItems={updateBackgroundItems}
        deleteBackgroundItem={deleteBackgroundItem} clickedItemId={clickedItemId}
        isCreateMapFillChapter={isCreateMapFillChapter}
        createMapFillChapter={createMapFillChapter} createMapItemsChapter={createMapItemsChapter} />)

    return <>
        <AddPictureButton addPicture={addNewBackground} />
        <div className={s.items}>
            {backgroundElements}
        </div>
    </>
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        backgroundItems: getBackgroundsItems(state),
        clickedItemId: getClickedItemId(state),
        isCreateMapFillChapter: getIsCreateMapFillChapter(state)
    }
}

export default connect(MapStateToProps, {
    saveNewBackgroundItem, deleteBackgroundItem, updateBackgroundItems, setClickedItemId,
    createMapFillChapter, createMapItemsChapter
})(BackgroundItemContainer)