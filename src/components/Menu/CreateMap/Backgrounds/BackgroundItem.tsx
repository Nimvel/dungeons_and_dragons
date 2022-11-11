import { FC } from 'react'
import { BackgroundItemOnMapType } from '../../../../redux/map-reducer'

//@ts-ignore
import s from '../../Menu.module.scss'

type BackgroundItemProps = {
    // width: number
    // height: number
    // gridSize: number

    backgroundItem: string
    clickedItemId: string
    id: string

    // isCreateMapFillChapter: boolean

    // deleteBackgroundItem: (id: string) => void
    // updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void

    // setClickedItemId: (clickedItemId: null | string) => void

    // createMapFillChapter: (isCreateMapFillChapter: boolean) => void
    // createMapItemsChapter: (isCreateMapItemsChapter: boolean) => void
    
    onCrossClick: (id: string) => void
    onBackgroundItemClick: (id: string) => void
    onFillClick: (backgroundItem) => void
}

const BackgroundItem: FC<BackgroundItemProps> = ({ backgroundItem, id, clickedItemId, 
    onBackgroundItemClick, onFillClick, onCrossClick
    // width, height, gridSize, setClickedItemId, deleteBackgroundItem, updateBackgroundItems, 
    // isCreateMapFillChapter, createMapFillChapter, createMapItemsChapter 
}) => {

    // const onCrossClick = () => {
    //     deleteBackgroundItem(id)
    // }
    
    // const onBackgroundItemClick = () => {
    //     clickedItemId && clickedItemId === id
    //         ? setClickedItemId(null)
    //         : setClickedItemId(id)
    // }

    // const onFillClick = () => {
    //     const boxesX = []
    //     const boxesY = []
    //     const items = []

    //     for (let i = 0; i <= Math.round((width - 100) / gridSize); i++) {
    //         boxesX.push(i)
    //     }
    //     for (let i = 0; i <= Math.round((height - 100) / gridSize); i++) {
    //         boxesY.push(i)
    //     }
    //     for (let y = 0; y <= boxesY.length; y++) {

    //         for (let x = 0; x <= boxesX.length; x++) {
    //             items.push({
    //                 backgroundItemOnMap: backgroundItem,
    //                 x: (x * 50) + (window.innerWidth - width) / 2,
    //                 y: (y * 50) + (window.innerHeight - height) / 2,
    //                 id: `background-${items.length}`
    //             })
    //         }
    //     }
    //     updateBackgroundItems(items)

    //     if (isCreateMapFillChapter) {
    //         createMapFillChapter(false)
    //         createMapItemsChapter(true)
    //     }
    // }

    return <div className={clickedItemId === id ? `${s.item} ${s.item_active}` : s.item}>
        <div className={s.holder}>
            <img src={backgroundItem} alt={backgroundItem} onClick={() => onBackgroundItemClick(id)} 
            onDoubleClick={() => onFillClick(backgroundItem)} />

            <div className={s.closeModal} onClick={() => onCrossClick(id)} />
        </div>
    </div>
}

export default BackgroundItem