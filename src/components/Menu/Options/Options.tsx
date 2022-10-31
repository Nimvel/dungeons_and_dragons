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

    addD4: () => void
    deleteD4: () => void
    addD6: () => void
    deleteD6: () => void
    addD8: () => void
    deleteD8: () => void
    addD10: () => void
    deleteD10: () => void
    addD12: () => void
    deleteD12: () => void
    addD20: () => void
    deleteD20: () => void
    addD100: () => void
    deleteD100: () => void
}

const Options: FC<OptionsType> = ({ itemColor, gridColor, onAddNewCircle, onChangeQuantity, onChangeColor, onChangeGridSize,
    updateGridSize, onChangeGridColor, onShowGrid, onHideGrid, onFullscreen, offFullscreen,
    addD4, deleteD4, addD6, deleteD6, addD8, deleteD8, addD10, deleteD10,
    addD12, deleteD12, addD20, deleteD20, addD100, deleteD100 }) => {
        
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

        <div>
            <div>Dice</div>

            <div>D4</div>
            <input type='radio' onClick={addD4} name='D4' />
            <label>On</label>
            <input type='radio' onClick={deleteD4} name='D4' />
            <label>Off</label><br />

            <div>D6</div>
            <input type='radio' onClick={addD6} name='D6' />
            <label>On</label>
            <input type='radio' onClick={deleteD6} name='D6' />
            <label>Off</label><br />

            <div>D8</div>
            <input type='radio' onClick={addD8} name='D8' />
            <label>On</label>
            <input type='radio' onClick={deleteD8} name='D8' />
            <label>Off</label><br />

            <div>D10</div>
            <input type='radio' onClick={addD10} name='D10' />
            <label>On</label>
            <input type='radio' onClick={deleteD10} name='D10' />
            <label>Off</label><br />

            <div>D12</div>
            <input type='radio' onClick={addD12} name='D12' />
            <label>On</label>
            <input type='radio' onClick={deleteD12} name='D12' />
            <label>Off</label><br />

            <div>D20</div>
            <input type='radio' onClick={addD20} name='D20' />
            <label>On</label>
            <input type='radio' onClick={deleteD20} name='D20' />
            <label>Off</label><br />

            <div>D100</div>
            <input type='radio' onClick={addD100} name='D100' />
            <label>On</label>
            <input type='radio' onClick={deleteD100} name='D100' />
            <label>Off</label><br />
        </div>
    </div>
}

export default Options;
