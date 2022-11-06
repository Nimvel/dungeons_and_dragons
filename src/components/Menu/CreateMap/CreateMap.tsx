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
    onCleanMap: () => void

    saveNewBackgroundItem: (backgroundItem: Blob | MediaSource) => void
    deleteBackgroundItem: (id: number) => void
    addNewBackgroundItemOnMap: (backgroundItem: string) => void

    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
    onFreeMovement: () => void
    onFixBackgroundItems: () => void
    onChangeMapDimensions: () => void
}

const CreateMap: FC<CreateMapProps> = ({ width, height, gridSize, backgroundItems, isFixBackgroundItems, isFreeMovement,
    onChangeWidth, onChangeHeight, onCleanMap, saveNewBackgroundItem, onFixBackgroundItems, onFreeMovement,
    onChangeMapDimensions,deleteBackgroundItem, addNewBackgroundItemOnMap, updateBackgroundItems }) => {

    return <div className={s.options}>
        <button onClick={onCleanMap}>Clean Map</button>
        <div>Dimentions</div>
        <input onChange={onChangeWidth} value={width / gridSize} placeholder={`x blocks`} />
        <input onChange={onChangeHeight} value={height / gridSize} placeholder={`y blocks`} />
        <button onClick={onChangeMapDimensions}>Update</button>

        <BackgroundItems width={width} height={height} gridSize={gridSize} backgroundItems={backgroundItems} 
        saveNewBackgroundItem={saveNewBackgroundItem} deleteBackgroundItem={deleteBackgroundItem} 
        addNewBackgroundItemOnMap={addNewBackgroundItemOnMap} updateBackgroundItems={updateBackgroundItems} />

        <button className={isFreeMovement ? 'button_on' : 'button_off'} onClick={onFreeMovement}>Free</button>
        <button className={isFixBackgroundItems ? 'button_on' : 'button_off'} onClick={onFixBackgroundItems}>Fix</button>
        
    </div>
}

export default CreateMap