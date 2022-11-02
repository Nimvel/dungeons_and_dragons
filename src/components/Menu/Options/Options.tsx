import { FC } from 'react'

//@ts-ignore
import s from '../Menu.module.scss'

type OptionsType = {
    gridColor: string

    grid: boolean
    fullscreen: boolean

    onChangeGridSize: (e: any) => void
    updateGridSize: () => void
    onChangeGridColor: (e: any) => void
    onShowGrid: () => void
    onHideGrid: () => void

    onFullscreen: () => void
    offFullscreen: () => void
}

const Options: FC<OptionsType> = ({ gridColor, fullscreen, grid, onChangeGridSize,
    updateGridSize, onChangeGridColor, onShowGrid, onHideGrid, onFullscreen, offFullscreen }) => {

    return <div className={s.options}>
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
    </div>
}

export default Options;
