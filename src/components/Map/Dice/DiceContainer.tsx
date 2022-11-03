import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import {
    getD10, getD100, getD12, getD20, getD4, getD6, getD8,
    getDiceColor, getDiceColorFace, getDiceNumberColor
} from '../../../redux/dice-selectors'

import Dice from './Dice'

type MapStateToPropsType = {
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
}

type MapDispatchToPropsType = {
}

type OwnPropsType = {
    width: number
}

type DiceContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const DiceContainer: FC<DiceContainerProps> = ({
    width, D4, D6, D8, D10, D12, D20, D100,
    diceColor, diceColorFace, diceNumberColor }) => {

    // React.useEffect(() => { }, [width])

    const x = width > window.innerWidth - 100 ? window.innerWidth - 100 : width + 10

    return <>
        {D4 && <Dice number={4} x={x} y={20} width={50} text={'D4'}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} />}
        {D6 && <Dice number={6} x={x} y={90} width={50} text={'D6'}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} />}
        {D8 && <Dice number={8} x={x} y={160} width={50} text={'D8'}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} />}
        {D10 && <Dice number={10} x={x} y={230} width={50} text={'D10'}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} />}
        {D12 && <Dice number={12} x={x} y={300} width={50} text={'D12'}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} />}
        {D20 && <Dice number={20} x={x} y={370} width={50} text={'D20'}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} />}
        {D100 && <Dice number={100} x={x} y={440} width={50} text={'D100'}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} />}
    </>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        D4: getD4(state),
        D6: getD6(state),
        D8: getD8(state),
        D10: getD10(state),
        D12: getD12(state),
        D20: getD20(state),
        D100: getD100(state),

        diceColor: getDiceColor(state),
        diceColorFace: getDiceColorFace(state),
        diceNumberColor: getDiceNumberColor(state)
    }
}

export default connect(mapStateToProps, {})(DiceContainer)