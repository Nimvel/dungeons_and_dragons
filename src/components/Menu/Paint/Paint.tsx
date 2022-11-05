import { FC } from 'react'

//@ts-ignore
import s from '../Menu.module.scss'

type PaintProps = {
  paintbrushColor: string
  pensilMode: boolean
  lineMode: boolean

  onChangeColor: (e: React.ChangeEvent<HTMLInputElement>) => void
  changePensilMode: () => void
  changeLineMode: () => void
}

const Paint: FC<PaintProps> = ({ paintbrushColor, pensilMode, lineMode,
  onChangeColor, changePensilMode, changeLineMode }) => {

  return <div className={s.options}>
    <button className={pensilMode ? 'button_on' : 'button_off'} onClick={changePensilMode}>Pencil</button>
    <button className={lineMode ? 'button_on' : 'button_off'} onClick={changeLineMode}>Line</button>

    <input onChange={onChangeColor} className='color' type='color' value={paintbrushColor} />
  </div>
}

export default Paint