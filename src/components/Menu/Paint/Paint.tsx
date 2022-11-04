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
  onChangeColor, changePensilMode,changeLineMode }) => {

  return <div className={s.options}>
    {pensilMode
      ? <button onClick={changePensilMode}>Pencil Off</button>
      : lineMode
        ? <button disabled onClick={changePensilMode}>Pencil On</button>
        : <button onClick={changePensilMode}>Pencil On</button>
    }
    {lineMode
      ? <button onClick={changeLineMode}>Line Off</button>
      : pensilMode
        ? <button disabled onClick={changeLineMode}>Line On</button>
        : <button onClick={changeLineMode}>Line On</button>
    }

    <input onChange={onChangeColor} className={s.color} type='color' value={paintbrushColor} />
  </div>
}

export default Paint