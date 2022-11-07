import { FC } from 'react'
import { itemImagesType } from '../../../../redux/itemImages-reducer'
import AddPictureButton from '../../../AddPictureButton/AddPictureButton'
import ItemImage from './ItemImage'

//@ts-ignore
import s from '../../Menu.module.scss'

type ItemImagesProps = {
    itemImages: Array<itemImagesType>

    saveNewItemImage: (itemImage: Blob | MediaSource) => void
    deleteItemImage: (id: number) => void
    addNewItemWithImage: (itemImage: string) => void
}

const ItemImages: FC<ItemImagesProps> = ({itemImages, saveNewItemImage, deleteItemImage, addNewItemWithImage }) => {

    const addNewItemImage = (e: any) => {
        e.target.files.length && saveNewItemImage(e.target.files[0])
    }

    const itemImagesElements = itemImages.map(i => <ItemImage key={i.id} id={i.id} 
        itemImage={i.itemImage} deleteItemImage={deleteItemImage} addNewItemWithImage={addNewItemWithImage} />)

    return <>
        <AddPictureButton addPicture={addNewItemImage} />
        <div className={s.items}>
            {itemImagesElements}
        </div>
    </>
}

export default ItemImages