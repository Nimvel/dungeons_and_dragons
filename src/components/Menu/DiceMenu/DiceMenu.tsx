import { FC } from 'react'

//@ts-ignore
import s from '../Menu.module.scss'

type DiceType = {
    D4: boolean
    D6: boolean
    D8: boolean
    D10: boolean
    D12: boolean
    D20: boolean
    D100: boolean
    
    diceColor: string
    diceColorFace: string
    diceNumberColor: string

    onD4: () => void
    onD6: () => void
    onD8: () => void
    onD10: () => void
    onD12: () => void
    onD20: () => void
    onD100: () => void

    onChangeDiceColor: (e: any) => void
    onChangeDiceColorFace: (e: any) => void
    onChangeDiceNumberColor: (e: any) => void
}

const DiceMenu: FC<DiceType> = ({D4, D6, D8, D10, D12, D20, D100, diceColor, diceColorFace, diceNumberColor,
    onD4, onD6, onD8, onD10, onD12, onD20, onD100, onChangeDiceColor, onChangeDiceColorFace, onChangeDiceNumberColor }) => {

    return <div className={s.options}>
            <div>Dice</div>
            <input onChange={onChangeDiceColor} className={s.color} type='color' value={diceColor} />
            <input onChange={onChangeDiceColorFace} className={s.color} type='color' value={diceColorFace} />
            <input onChange={onChangeDiceNumberColor} className={s.color} type='color' value={diceNumberColor} />

            <button className={D4 ? 'button_on' : 'button_off'} onClick={onD4}>D4</button>
            <button className={D6 ? 'button_on' : 'button_off'} onClick={onD6}>D6</button>
            <button className={D8 ? 'button_on' : 'button_off'} onClick={onD8}>D8</button>
            <button className={D10 ? 'button_on' : 'button_off'} onClick={onD10}>D10</button>
            <button className={D12 ? 'button_on' : 'button_off'} onClick={onD12}>D12</button>
            <button className={D20 ? 'button_on' : 'button_off'} onClick={onD20}>D20</button>
            <button className={D100 ? 'button_on' : 'button_off'} onClick={onD100}>D100</button>
    </div>
}

export default DiceMenu
