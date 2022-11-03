import * as React from 'react'
import { FC } from 'react'
import { BackgroundItemType } from '../../../redux/backgrounds-reducer'

//@ts-ignore
import s from '../Menu.module.scss'

import BackgroundItems from './Backgrounds/BackgroundItems'

type CreateMapProps = {
    width: number
    height: number

    backgroundItems: Array<BackgroundItemType>

    onChangeWidth: (e: any) => void
    onChangeHeight: (e: any) => void
    onCreateMap: () => void

    saveNewBackgroundItem: (backgroundItem: Blob | MediaSource) => void
    deleteBackgroundItem: (id: number) => void
    addNewBackgroundItemOnMap: (backgroundItem: string) => void
}

const CreateMap: FC<CreateMapProps> = ({ width, height, backgroundItems,
    onChangeWidth, onChangeHeight, onCreateMap, saveNewBackgroundItem, deleteBackgroundItem, addNewBackgroundItemOnMap }) => {

    return <div className={s.options}>
        <div>Dimentions</div>
        <input onChange={onChangeWidth} className={s.enterNumber} value={width} placeholder={`map's width`} />
        <input onChange={onChangeHeight} className={s.enterNumber} value={height} placeholder={`map's height`} />
        <button onClick={onCreateMap} >Create Map</button>

        <BackgroundItems backgroundItems={backgroundItems} saveNewBackgroundItem={saveNewBackgroundItem} 
        deleteBackgroundItem={deleteBackgroundItem} addNewBackgroundItemOnMap={addNewBackgroundItemOnMap} />
    </div>
}

export default CreateMap