import { FC } from 'react'

//@ts-ignore
import s from './Options.module.scss'

type OptionsType = {
    itemColor: string
    gridColor: string

    onAddNewCircle: () => void
    onChangeQuantity: (e: any) => void
    onChangeColor: (e: any) => void

    onChangeGridSize: (e: any) => void
    updateGridSize: () => void
    onChangeGridColor: (e: any) => void
    onShowGrid: () => void
    onHideGrid: () => void

    onFullscreen: () => void
    offFullscreen: () => void
}

const Options: FC<OptionsType> = ({ itemColor, gridColor, onAddNewCircle, onChangeQuantity, onChangeColor, onChangeGridSize,
    updateGridSize, onChangeGridColor, onShowGrid, onHideGrid, onFullscreen, offFullscreen }) => {
        
    return <div className={s.options}>
        <div>
            <div>Circles</div>
            <input onChange={onChangeQuantity} className={s.enterNumber} placeholder='Enter quantity of circles' />
            <input onChange={onChangeColor} className={s.color} type='color' value={itemColor} />
            <button onClick={onAddNewCircle}>Add</button>
        </div>

        <div>
            <div>Grid</div>
            <input onChange={onChangeGridSize} className={s.enterNumber} placeholder='Enter size' /><br />
            <button onClick={updateGridSize}>Update</button><br />
            <input type='radio' onClick={onShowGrid} name='grid' />
            <label>On</label><br />
            <input type='radio' onClick={onHideGrid} name='grid' />
            <label>Off</label><br />
            <input onChange={onChangeGridColor} className={s.color} type='color' value={gridColor} />
        </div>

        <div>
            <div>Fullscreen</div>
            <input type='radio' onClick={onFullscreen} name='fullscreen' />
            <label>On</label><br />
            <input type='radio' onClick={offFullscreen} name='fullscreen' />
            <label>Off</label><br />
        </div>
    </div>
}

export default Options;
