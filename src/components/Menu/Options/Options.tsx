import { FC } from 'react'

//@ts-ignore
import s from './Options.module.scss'

type OptionsType = {
    itemColor: string
    gridColor: string

    diceColor: string
    diceColorFace: string
    diceNumberColor: string

    grid: boolean
    fullscreen: boolean

    D4: boolean
    D6: boolean
    D8: boolean
    D10: boolean
    D12: boolean
    D20: boolean
    D100: boolean

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

    onChangeDiceColor: (e: any) => void
    onChangeDiceColorFace: (e: any) => void
    onChangeDiceNumberColor: (e: any) => void
}

const Options: FC<OptionsType> = ({ itemColor, gridColor, diceColor, diceColorFace, diceNumberColor,
    D4, D6, D8, D10, D12, D20, D100, fullscreen, grid,
    onAddNewCircle, onChangeQuantity, onChangeColor, onChangeGridSize,
    updateGridSize, onChangeGridColor, onShowGrid, onHideGrid, onFullscreen, offFullscreen,
    addD4, deleteD4, addD6, deleteD6, addD8, deleteD8, addD10, deleteD10,
    addD12, deleteD12, addD20, deleteD20, addD100, deleteD100,
    onChangeDiceColor, onChangeDiceColorFace, onChangeDiceNumberColor }) => {

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
            <input onChange={onChangeGridColor} className={s.color} type='color' value={gridColor} />
            {grid
                ? <><button onClick={onHideGrid} >Off</button><br /></>
                : <><button onClick={onShowGrid} >On</button><br /></>
            }
        </div>

        <div>
            <div>Fullscreen</div>
            {fullscreen
                ? <><button onClick={offFullscreen} >Off</button><br /></>
                : <><button onClick={onFullscreen} >On</button><br /></>
            }
        </div>

        <div>
            <div>Dice</div>
            <input onChange={onChangeDiceColor} className={s.color} type='color' value={diceColor} />
            <input onChange={onChangeDiceColorFace} className={s.color} type='color' value={diceColorFace} />
            <input onChange={onChangeDiceNumberColor} className={s.color} type='color' value={diceNumberColor} />

            {D4
                ? <><button onClick={deleteD4} >D4 Off</button><br /></>
                : <><button onClick={addD4} >D4 On</button><br /></>
            }

            {D6
                ? <><button onClick={deleteD6} >D6 Off</button><br /></>
                : <><button onClick={addD6} >D6 On</button><br /></>
            }
            {D8
                ? <><button onClick={deleteD8} >D8 Off</button><br /></>
                : <><button onClick={addD8} >D8 On</button><br /></>
            }
            {D10
                ? <><button onClick={deleteD10} >D10 Off</button><br /></>
                : <><button onClick={addD10} >D10 On</button><br /></>
            }
            {D12
                ? <><button onClick={deleteD12} >D12 Off</button><br /></>
                : <><button onClick={addD12} >D12 On</button><br /></>
            }
            {D20
                ? <><button onClick={deleteD20} >D20 Off</button><br /></>
                : <><button onClick={addD20} >D20 On</button><br /></>
            }
            {D100
                ? <><button onClick={deleteD100} >D100 Off</button><br /></>
                : <><button onClick={addD100} >D100 On</button><br /></>
            }
        </div>
    </div>
}

export default Options;
