import { FC } from 'react'

//@ts-ignore
import s from '../Menu.module.scss'

type OptionsType = {
    borders: boolean
    bordersColor: string
    newBordersColor: string

    grid: boolean
    gridColor: string
    newGridColor: string

    fullscreen: boolean
    isSameColors: boolean
    bothColors: string

    onBorders: () => void
    onGrid: () => void

    onChangeBordersColor: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeGridColor: (e: React.ChangeEvent<HTMLInputElement>) => void

    onChangeGridSize: (e: any) => void
    updateGridSize: () => void

    onFullscreen: () => void
    offFullscreen: () => void

    onSameColors: () => void
    onChangeBothColors: (e: React.ChangeEvent<HTMLInputElement>) => void

}

const Options: FC<OptionsType> = ({ borders, bothColors,
    newBordersColor, grid, newGridColor, fullscreen, isSameColors,
    onBorders, onGrid, onChangeGridColor, onChangeBordersColor, onChangeBothColors,
    onChangeGridSize, updateGridSize, onFullscreen, offFullscreen, onSameColors }) => {

    return <div className={s.options}>
        <div>Borders</div>

        {isSameColors
            ? <input disabled onChange={onChangeBordersColor} className='color' type='color' value={newBordersColor} />
            : <input onChange={onChangeBordersColor} className='color' type='color' value={newBordersColor} />}

        <button className={borders ? 'button_on' : 'button_off'} onClick={onBorders}>Borders</button>

        <div>Grid</div>
        <input onChange={onChangeGridSize} placeholder='Enter size' />
        <button onClick={updateGridSize}>Update</button>

        {isSameColors
            ? <input disabled onChange={onChangeGridColor} className='color' type='color' value={newGridColor} />
            : <input onChange={onChangeGridColor} className='color' type='color' value={newGridColor} />}

        <button className={grid ? 'button_on' : 'button_off'} onClick={onGrid}>Grid</button>

        {isSameColors
            ? <input onChange={onChangeBothColors} className='color' type='color' value={bothColors} />
            : <input disabled onChange={onChangeBothColors} className='color' type='color' value={bothColors} />}
        <button className={isSameColors ? 'button_on' : 'button_off'} onClick={onSameColors}>Same colors</button>


        <button className={fullscreen ? 'button_on' : 'button_off'}
            onClick={fullscreen ? offFullscreen : onFullscreen}>Fullscreen</button>
    </div>
}

export default Options