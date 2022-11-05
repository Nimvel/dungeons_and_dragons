import { FC } from 'react'
import { itemImagesType } from '../../../redux/itemImages-reducer'

//@ts-ignore
import s from '../Menu.module.scss'
import ItemImages from './ItemImages/ItemImages'

type ItemsType = {
    itemColor: string
    itemImages: Array<itemImagesType>

    onAddNewCircle: () => void
    onChangeQuantity: (e: any) => void
    onChangeColor: (e: any) => void

    saveNewItemImage: (itemImage: Blob | MediaSource) => void
    deleteItemImage: (id: number) => void
    addNewItemWithImage: (itemImage: string) => void
}

const Items: FC<ItemsType> = ({ itemColor, itemImages, onAddNewCircle, 
    onChangeQuantity, onChangeColor, saveNewItemImage, deleteItemImage, addNewItemWithImage }) => {

    return (
        <div className={s.options}>
            <div>Circles</div>
            <input onChange={onChangeQuantity} placeholder='Enter quantity of circles' />
            <input onChange={onChangeColor} className='color' type='color' value={itemColor} />
            <button onClick={onAddNewCircle}>Add</button>

            <ItemImages itemImages={itemImages} addNewItemWithImage={addNewItemWithImage}
            saveNewItemImage={saveNewItemImage} deleteItemImage={deleteItemImage} />
        </div>
        )
}

export default Items
