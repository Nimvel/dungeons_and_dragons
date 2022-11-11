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

const BackgroundItemContainer: FC<BackgroundItemContainerProps> = ({ width, height, gridSize, backgroundItems, clickedItemId,
    isCreateMapFillChapter, saveNewBackgroundItem, deleteBackgroundItem, updateBackgroundItems, setClickedItemId, 
    createMapFillChapter, createMapItemsChapter,
    
  }) => {

    const addNewBackground = (e: any) => {
        e.target.files.length && saveNewBackgroundItem(e.target.files[0])
    }

    const onCrossClick = (id: string) => {
        deleteBackgroundItem(id)
    }
    
    const onBackgroundItemClick = (id: string) => {
        clickedItemId && clickedItemId === id
            ? setClickedItemId(null)
            : setClickedItemId(id)
    }

    const onFillClick = (backgroundItem) => {
        const boxesX = []
        const boxesY = []
        const items = []

        for (let i = 0; i <= Math.round((width - 100) / gridSize); i++) {
            boxesX.push(i)
        }
        for (let i = 0; i <= Math.round((height - 100) / gridSize); i++) {
            boxesY.push(i)
        }
        for (let y = 0; y <= boxesY.length; y++) {

            for (let x = 0; x <= boxesX.length; x++) {
                items.push({
                    backgroundItemOnMap: backgroundItem,
                    x: (x * 50) + (window.innerWidth - width) / 2,
                    y: (y * 50) + (window.innerHeight - height) / 2,
                    id: `background-${items.length}`
                })
            }
        }
        updateBackgroundItems(items)

        if (isCreateMapFillChapter) {
            createMapFillChapter(false)
            createMapItemsChapter(true)
        }
    }

    const backgroundElements = backgroundItems.map(b => <BackgroundItem key={b.id} 
        // width={width} height={height} gridSize={gridSize} 
        id={b.id} backgroundItem={b.backgroundItem} clickedItemId={clickedItemId}
        onBackgroundItemClick={onBackgroundItemClick} onFillClick={onFillClick} onCrossClick={onCrossClick}
        // setClickedItemId={setClickedItemId}
        //  updateBackgroundItems={updateBackgroundItems}
        // deleteBackgroundItem={deleteBackgroundItem} 
        // isCreateMapFillChapter={isCreateMapFillChapter}
        // createMapFillChapter={createMapFillChapter} createMapItemsChapter={createMapItemsChapter} 
        />)

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