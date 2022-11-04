import { FC } from 'react'

//@ts-ignore
import s from '../Menu.module.scss'

type OptionsType = {
    borders: boolean
    bordersColor: string

    grid: boolean
    gridColor: string

    fullscreen: boolean
    isSameColors: boolean

    onShowBorders: () => void
    onHideBorders: () => void
    onChangeBordersColor: (e: any) => void

    onChangeGridSize: (e: any) => void
    updateGridSize: () => void
    onChangeGridColor: (e: any) => void
    onShowGrid: () => void
    onHideGrid: () => void

    onFullscreen: () => void
    offFullscreen: () => void

    onSameColors: () => void
}

const Options: FC<OptionsType> = ({ borders, bordersColor, grid, gridColor, fullscreen, isSameColors,
    onShowBorders, onHideBorders, onChangeBordersColor, onChangeGridSize, updateGridSize,
    onChangeGridColor, onShowGrid, onHideGrid, onFullscreen, offFullscreen, onSameColors }) => {

    return <div className={s.options}>
        <div>
            <div>Borders</div>
            {isSameColors
                ? <input onChange={onChangeGridColor} className={s.color} type='color' value={bordersColor} />
                : <input onChange={onChangeBordersColor} className={s.color} type='color' value={bordersColor} />
            }
            {/* <input onChange={onChangeBordersColor} className={s.color} type='color' value={bordersColor} /> */}
            {borders
                ? <button onClick={onHideBorders} >Off</button>
                : <button onClick={onShowBorders} >On</button>
            }
        </div>

        <div>
            <div>Grid</div>
            <input onChange={onChangeGridSize} className={s.enterNumber} placeholder='Enter size' />
            <button onClick={updateGridSize}>Update</button>
            <input onChange={onChangeGridColor} className={s.color} type='color' value={gridColor} />
            {grid
                ? <button onClick={onHideGrid} >Off</button>
                : <button onClick={onShowGrid} >On</button>
            }
        </div>

        <div>
            <div>Same colors</div>
            {isSameColors
                ? <button onClick={onSameColors} >Off</button>
                : <button onClick={onSameColors} >On</button>
            }
        </div>

        <div>
            <div>Fullscreen</div>
            {fullscreen
                ? <button onClick={offFullscreen} >Off</button>
                : <button onClick={onFullscreen} >On</button>
            }
        </div>
    </div>
}

export default Options;
