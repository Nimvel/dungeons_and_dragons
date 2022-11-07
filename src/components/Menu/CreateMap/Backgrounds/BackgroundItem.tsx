import { FC } from 'react'
import { BackgroundItemOnMapType } from '../../../../redux/map-reducer'

//@ts-ignore
import s from './BackgroundItems.module.scss'

type BackgroundItemProps = {
    width: number
    height: number
    gridSize: number

    backgroundItem: string
    id: number

    deleteBackgroundItem: (id: number) => void
    addNewBackgroundItemOnMap: (backgroundItem: string) => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
}

const BackgroundItem: FC<BackgroundItemProps> = ({ width, height, gridSize, backgroundItem, id,
    deleteBackgroundItem, addNewBackgroundItemOnMap, updateBackgroundItems }) => {

    const onBackgroundItemClick = () => {
        addNewBackgroundItemOnMap(backgroundItem)
    }

    const onCrossClick = () => {
        deleteBackgroundItem(id)
    }

    const onFillClick = () => {
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
    }

    return <div className={s.backgroundItem}>
        <div className={s.holder}>
            <img src={backgroundItem} alt={backgroundItem} onClick={onBackgroundItemClick} onDoubleClick={onFillClick} />

            <div className='closeModal' onClick={onCrossClick} />
        </div>
    </div>
}

export default BackgroundItem