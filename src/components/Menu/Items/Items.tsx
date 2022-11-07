import { FC } from 'react'
import { itemImagesType } from '../../../redux/itemImages-reducer'
import ItemImages from './ItemImages/ItemImages'

//@ts-ignore
import s from '../Menu.module.scss'

type ItemsType = {
    newQuantity: number
    itemColor: string
    itemImages: Array<itemImagesType>

    onAddNewCircle: () => void
    onChangeQuantity: (e: any) => void
    onChangeColor: (e: any) => void

    saveNewItemImage: (itemImage: Blob | MediaSource) => void
    deleteItemImage: (id: number) => void
    addNewItemWithImage: (itemImage: string) => void
}

const Items: FC<ItemsType> = ({ newQuantity, itemColor, itemImages, onAddNewCircle, 
    onChangeQuantity, onChangeColor, saveNewItemImage, deleteItemImage, addNewItemWithImage }) => {

    return (
        <div className={s.menu}>
            <div>Circles</div>
            <input onChange={onChangeQuantity} value={newQuantity} />
            <input onChange={onChangeColor} className='color' type='color' value={itemColor} />
            <button onClick={onAddNewCircle}>Add</button>

            <ItemImages itemImages={itemImages} addNewItemWithImage={addNewItemWithImage}
            saveNewItemImage={saveNewItemImage} deleteItemImage={deleteItemImage} />
        </div>
        )
}

export default Items
