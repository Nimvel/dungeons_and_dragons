import { FC } from 'react'
import { BackgroundItemType } from '../../../../redux/backgrounds-reducer'
import BackgroundItem from './BackgroundItem'

//@ts-ignore
import s from './BackgroundItems.module.scss'

type BackgroundItemsProps = {
    backgroundItems: Array<BackgroundItemType>

    saveNewBackgroundItem: (backgroundItem: Blob | MediaSource) => void
    deleteBackgroundItem: (id: number) => void
    addNewBackgroundItemOnMap: (backgroundItem: string) => void
}

const BackgroundItems: FC<BackgroundItemsProps> = ({ backgroundItems, saveNewBackgroundItem, deleteBackgroundItem, addNewBackgroundItemOnMap }) => {

    const addNewBackground = (e) => {
        e.target.files.length && saveNewBackgroundItem(e.target.files[0])
    }

    const backgroundElements = backgroundItems.map(b => <BackgroundItem key={b.id}
        backgroundItem={b.backgroundItem}
        id={b.id} deleteBackgroundItem={deleteBackgroundItem}
        addNewBackgroundItemOnMap={addNewBackgroundItemOnMap} />)

    return <>
        <div className='block'>
            <label>
                <input onChange={addNewBackground}
                    type={'file'} accept='.jpg, .jpeg, .tiff, .png, .gif, .bmp, jp2' />  {/* multiple */}
                <span>Add Item</span>
            </label>
        </div>
        <div className={s.backgroundItems}>
            {backgroundElements}
        </div>
    </>
}

export default BackgroundItems