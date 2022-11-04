import { FC } from 'react'
import { itemImagesType } from '../../../../redux/itemImages-reducer'
import ItemImage from './ItemImage'

//@ts-ignore
import s from './ItemImages.module.scss'

type ItemImagesProps = {
    itemImages: Array<itemImagesType>

    saveNewItemImage: (itemImage: Blob | MediaSource) => void
    deleteItemImage: (id: number) => void
    addNewItemWithImage: (itemImage: string) => void
    // updateItemImages: () => void
}

const ItemImages: FC<ItemImagesProps> = ({itemImages, saveNewItemImage, deleteItemImage,
    addNewItemWithImage,
    //  updateItemImages
    }) => {

    const addNewItemImage = (e: any) => {
        e.target.files.length && saveNewItemImage(e.target.files[0])
    }

    const itemImagesElements = itemImages.map(i => <ItemImage key={i.id} id={i.id} 
        itemImage={i.itemImage}
        //  updateItemImages={updateItemImages}
        deleteItemImage={deleteItemImage} addNewItemWithImage={addNewItemWithImage}
         />)

    return <>
        <div className='block'>
            <label>
                <input onChange={addNewItemImage}
                    type={'file'} accept='.jpg, .jpeg, .tiff, .png, .gif, .bmp, jp2' />  {/* multiple */}
                <span>Add Item</span>
            </label>
        </div>
        <div className={s.backgroundItems}>
            {itemImagesElements}
        </div>
    </>
}

export default ItemImages