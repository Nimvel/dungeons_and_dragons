import { FC } from 'react'

//@ts-ignore
import s from '../Menu.module.scss'

type PaintProps = {
  paintbrushColor: string
  pensilMode: boolean
  lineMode: boolean

  onChangeColor: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPensilMode: () => void
  offPensilMode: () => void
  onLineMode: () => void
  offLineMode: () => void
}

const Paint: FC<PaintProps> = ({ paintbrushColor, pensilMode, lineMode,
  onChangeColor, onPensilMode, offPensilMode, onLineMode, offLineMode }) => {

  return <div className={s.options}>
    {pensilMode
      ? <button onClick={offPensilMode}>Pencil Off</button>
      : lineMode
        ? <button disabled onClick={onPensilMode}>Pencil On</button>
        : <button onClick={onPensilMode}>Pencil On</button>
    }
    {lineMode
      ? <button onClick={offLineMode}>Line Off</button>
      : pensilMode
        ? <button disabled onClick={onLineMode}>Line On</button>
        : <button onClick={onLineMode}>Line On</button>
    }
    {/* <button onClick={pensilMode ? offPensilMode : onPensilMode}>Pencil</button>
    <button onClick={lineMode ? offLineMode : onLineMode}>Line</button> */}
    <input onChange={onChangeColor} className={s.color} type='color' value={paintbrushColor} />
  </div>
}

export default Paint