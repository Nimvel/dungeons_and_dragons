import * as React from 'react'
import { FC } from 'react'
import { BackgroundItemType } from '../../../redux/backgrounds-reducer'
import { BackgroundItemOnMapType } from '../../../redux/map-reducer'

//@ts-ignore
import s from '../Menu.module.scss'

import BackgroundItems from './Backgrounds/BackgroundItems'

type CreateMapProps = {
    width: number
    height: number
    gridSize: number

    backgroundItems: Array<BackgroundItemType>
    isFreeMovement: boolean
    isFixBackgroundItems: boolean

    onChangeWidth: (e: any) => void
    onChangeHeight: (e: any) => void
    onCreateMap: () => void

    saveNewBackgroundItem: (backgroundItem: Blob | MediaSource) => void
    deleteBackgroundItem: (id: number) => void
    addNewBackgroundItemOnMap: (backgroundItem: string) => void

    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
    onFreeMovement: () => void
    onFixBackgroundItems: () => void
    onChangeMapDimensions: () => void
}

const CreateMap: FC<CreateMapProps> = ({ width, height, gridSize, backgroundItems, isFixBackgroundItems, isFreeMovement,
    onChangeWidth, onChangeHeight, onCreateMap, saveNewBackgroundItem, onFixBackgroundItems, onFreeMovement,
    onChangeMapDimensions,deleteBackgroundItem, addNewBackgroundItemOnMap, updateBackgroundItems }) => {

    return <div className={s.options}>
        <button onClick={onCreateMap}>Create Map</button>
        <div>Dimentions</div>
        <input onChange={onChangeWidth} className={s.enterNumber} value={width} placeholder={`map's width`} />
        <input onChange={onChangeHeight} className={s.enterNumber} value={height} placeholder={`map's height`} />
        <button onClick={onChangeMapDimensions}>Update</button>

        <BackgroundItems width={width} height={height} gridSize={gridSize} backgroundItems={backgroundItems} 
        saveNewBackgroundItem={saveNewBackgroundItem} deleteBackgroundItem={deleteBackgroundItem} 
        addNewBackgroundItemOnMap={addNewBackgroundItemOnMap} updateBackgroundItems={updateBackgroundItems} />
        {isFreeMovement
        ? <button onClick={onFreeMovement}>Free Off</button>
        : <button onClick={onFreeMovement}>Free On</button>}
        {isFixBackgroundItems
        ? <button onClick={onFixBackgroundItems}>Fix Off</button>
        : <button onClick={onFixBackgroundItems}>Fix On</button>}
        
    </div>
}

export default CreateMap