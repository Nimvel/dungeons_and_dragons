import { FC } from 'react'
import { BackgroundItemType } from '../../../../redux/backgrounds-reducer'
import { BackgroundItemOnMapType } from '../../../../redux/map-reducer'
import BackgroundItem from './BackgroundItem'

//@ts-ignore
import s from './BackgroundItems.module.scss'

type BackgroundItemsProps = {
    width: number
    height: number
    gridSize: number

    backgroundItems: Array<BackgroundItemType>

    saveNewBackgroundItem: (backgroundItem: Blob | MediaSource) => void
    deleteBackgroundItem: (id: number) => void
    addNewBackgroundItemOnMap: (backgroundItem: string) => void

    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
}

const BackgroundItems: FC<BackgroundItemsProps> = ({ width, height, gridSize, backgroundItems, saveNewBackgroundItem, 
    deleteBackgroundItem, addNewBackgroundItemOnMap, updateBackgroundItems }) => {

    const addNewBackground = (e) => {
        e.target.files.length && saveNewBackgroundItem(e.target.files[0])
    }

    const backgroundElements = backgroundItems.map(b => <BackgroundItem key={b.id}
        width={width} height={height} gridSize={gridSize} id={b.id} 
        backgroundItem={b.backgroundItem} updateBackgroundItems={updateBackgroundItems}
        deleteBackgroundItem={deleteBackgroundItem} addNewBackgroundItemOnMap={addNewBackgroundItemOnMap} />)

    return <>
        <div className={s.backgroundItems}>
            {backgroundElements}
        </div>
        <div className='block'>
            <label>
                <input onChange={addNewBackground}
                    type={'file'} accept='.jpg, .jpeg, .tiff, .png, .gif, .bmp, jp2' />  {/* multiple */}
                <span>Add Item</span>
            </label>
        </div>
    </>
}

export default BackgroundItems