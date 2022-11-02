import { FC } from 'react'

//@ts-ignore
import s from '../Menu.module.scss'

type ItemsType = {
    itemColor: string

    onAddNewCircle: () => void
    onChangeQuantity: (e: any) => void
    onChangeColor: (e: any) => void
}

const Items: FC<ItemsType> = ({ itemColor, onAddNewCircle, onChangeQuantity, onChangeColor }) => {
    return (
        <div className={s.options}>
            <div>Circles</div>
            <input onChange={onChangeQuantity} className={s.enterNumber} placeholder='Enter quantity of circles' />
            <input onChange={onChangeColor} className={s.color} type='color' value={itemColor} />
            <button onClick={onAddNewCircle}>Add</button>
        </div>
        )
}

export default Items
