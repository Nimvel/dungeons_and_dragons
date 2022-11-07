import { FC } from 'react'

//@ts-ignore
import s from '../../Menu.module.scss'

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

    return <div className={s.item}>
        <div className={s.holder}>
            <img src={itemImage} alt={itemImage} onClick={onItemImageClick} />

            <div className={s.closeModal} onClick={onCrossClick} />
        </div>
    </div>
}

export default ItemImage