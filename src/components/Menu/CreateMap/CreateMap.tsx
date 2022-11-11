import * as React from 'react'
import { FC } from 'react'

//@ts-ignore
import s from '../Menu.module.scss'

import BackgroundItemContainer from './Backgrounds/BackgroundItemContainer'

type CreateMapProps = {
    width: number
    height: number
    gridSize: number

    isFreeMovement: boolean
    isFixBackgroundItems: boolean

    onChangeWidth: (e: any) => void
    onChangeHeight: (e: any) => void
    onCreateMap: () => void

    onFreeMovement: () => void
    onFixClick: () => void
    onChangeMapDimensions: () => void
}

const CreateMap: FC<CreateMapProps> = ({ width, height, gridSize, isFixBackgroundItems, isFreeMovement,
    onChangeWidth, onChangeHeight, onCreateMap, onFixClick, onFreeMovement, onChangeMapDimensions,
 }) => {

    return <div className={s.menu}>
        <button onClick={onCreateMap}>Create map</button>
        <div>Dimentions</div>
        <input onChange={onChangeWidth} value={Math.round(width / gridSize)} placeholder={`x blocks`} />
        <input onChange={onChangeHeight} value={Math.round(height / gridSize)} placeholder={`y blocks`} />
        <button onClick={onChangeMapDimensions}>Update</button>

        <BackgroundItemContainer width={width} height={height} gridSize={gridSize} />

        <button className={isFreeMovement ? 'button_on' : 'button_off'} onClick={onFreeMovement}>Free</button>
        <button className={isFixBackgroundItems ? 'button_on' : 'button_off'} onClick={onFixClick}>Fix</button>

    </div>
}

export default CreateMap