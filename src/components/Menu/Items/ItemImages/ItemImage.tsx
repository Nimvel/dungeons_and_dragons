import { FC } from 'react'

//@ts-ignore
import s from './ItemImages.module.scss'

type ItemImageProps = {
    itemImage: string
    id: number

    deleteItemImage: (id: number) => void
    addNewItemWithImage: (itemImage: string) => void
}

const ItemImage: FC<ItemImageProps> = ({ itemImage, id, deleteItemImage, addNewItemWithImage }) => {

    const onItemImageClick = () => {
        addNewItemWithImage(itemImage)
    }

    const onCrossClick = () => {
        deleteItemImage(id)
    }

    // const onFillClick = () => {
    //     const boxesX = []
    //     const boxesY = []
    //     const items = []

    //     for (let i = 0; i <= Math.ceil((width - 100) / gridSize); i++) {
    //         boxesX.push(i)
    //     }
    //     for (let i = 0; i <= Math.ceil((height - 100) / gridSize); i++) {
    //         boxesY.push(i)
    //     }
    //     for (let y = 0; y <= boxesY.length; y++) {

    //     for (let x = 0; x <= boxesX.length; x++) {
    //         items.push({
    //             backgroundItemOnMap: backgroundItem,
    //             x: x * 50,
    //             y: y * 50,
    //             id: id
    //         })
    //     }
    // }
    //     updateBackgroundItems(items)
    // }

    return <div className={s.backgroundItem}>
        <div className={s.holder}>
            <img src={itemImage} alt={itemImage} onClick={onItemImageClick} />

            <div className='closeModal' onClick={onCrossClick} />
        </div>
    </div>
}

export default ItemImage