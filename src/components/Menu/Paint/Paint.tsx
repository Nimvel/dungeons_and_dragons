import { FC } from 'react'
import { LineType } from '../../../redux/paint-reducer'

//@ts-ignore
import s from '../Menu.module.scss'

type PaintProps = {
  paintbrushColor: string
  strokeWidth: number
  pensilMode: boolean
  lineMode: boolean
  lines: Array<LineType>

  onChangeColor: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeStrokeWidth: (e: any) => void
  onUpdateStrokeWidth: () => void

  changePensilMode: () => void
  changeLineMode: () => void

  deleteLine: () => void 
  cleanLines: () => void
}

const Paint: FC<PaintProps> = ({ paintbrushColor, strokeWidth, pensilMode, lineMode, lines, 
  onChangeColor, onChangeStrokeWidth, onUpdateStrokeWidth, changePensilMode, changeLineMode, deleteLine, cleanLines }) => {

  return <div className={s.menu}>
    <button className={pensilMode ? 'button_on' : 'button_off'} onClick={changePensilMode}>Pencil</button>
    <button className={lineMode ? 'button_on' : 'button_off'} onClick={changeLineMode}>Line</button>

    <input onChange={onChangeColor} className='color' type='color' value={paintbrushColor} />
    <button className={lines.length ? 'button_on' : 'button_off'} onClick={deleteLine}>Delete last</button>
    <button className={lines.length ? 'button_on' : 'button_off'} onClick={cleanLines}>Clean lines</button>

    <input onChange={onChangeStrokeWidth} value={strokeWidth} />
    <button onClick={onUpdateStrokeWidth}>Update size</button>


  </div>
}

export default Paint