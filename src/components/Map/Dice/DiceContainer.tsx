import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import { allDiceMenuChapter, changeDiceMenuChapter } from '../../../redux/education-reducer'

import {
    getD10, getD100, getD12, getD20, getD4, getD6, getD8,
    getDiceColor, getDiceColorFace, getDiceNumberColor, getIsTypesOfDice
} from '../../../redux/dice-selectors'
import { getIsAllDiceMenuChapter } from '../../../redux/education-selectors'


import Dice from './Dice'

type MapStateToPropsType = {
    D4: boolean
    D6: boolean
    D8: boolean
    D10: boolean
    D12: boolean
    D20: boolean
    D100: boolean

    isTypesOfDice: boolean

    diceColor: string
    diceColorFace: string
    diceNumberColor: string

    isAllDiceMenuChapter: boolean
}

type MapDispatchToPropsType = {
    allDiceMenuChapter: (isAllDiceMenuChapter: boolean) => void
    changeDiceMenuChapter: (isChangeDiceMenuChapter: boolean) => void
}

type OwnPropsType = {
    width: number
}

type DiceContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const DiceContainer: FC<DiceContainerProps> = ({ 
    width, D4, D6, D8, D10, D12, D20, D100, isTypesOfDice,
    diceColor, diceColorFace, diceNumberColor,
    isAllDiceMenuChapter, allDiceMenuChapter, changeDiceMenuChapter }) => {

    React.useEffect(() => { }, [width, window.innerWidth])

    const x = width > window.innerWidth - 105
        ? width + 30
        : isTypesOfDice
            ? window.innerWidth - 105
            : window.innerWidth - 75

    const D4Y = 20
    const D6Y = D4 ? 90 : 20
    const D8Y =  D4 && D6 ? 160 
    : D4 || D6 ? 90 : 20

    const D10Y =  D4 && D6 && D8 ? 230 
    : D4 && D6 || 
    D6 && D8  || 
    D8 && D4 ? 160 
    : D4 || D6 || D8 ? 90 : 20

    const D12Y = D4 && D6 && D8 && D10 ? 300 
    : D4 && D6 && D8 || 
    D4 && D6 && D10 || 
    D6 && D8 && D10 || 
    D4 && D8 && D10 ? 230 
    : D4 && D6 || 
    D6 && D8 || 
    D8 && D10 || 
    D10 && D6 || 
    D10 && D4 || 
    D8 && D4 ? 160 
    : D4 || D6 || D8 || D10 ? 90 : 20

    const D20Y = D4 && D6 && D8 && D10 && D12 ? 370 
    : D4 && D6 && D8 && D10 || 
    D4 && D6 && D8 && D12 || 
    D4 && D6 && D10 && D12 || 
    D4 && D8 && D10 && D12 || 
    D6 && D8 && D10 && D12 ? 300 
    : D4 && D6 && D8 || 
    D4 && D6 && D10 || 
    D4 && D6 && D12 || 
    D4 && D8 && D10 || 
    D4 && D8 && D12 || 
    D4 && D10 && D12 || 
    D6 && D8 && D10 || 
    D6 && D8 && D12 || 
    D6 && D10 && D12 || 
    D8 && D10 && D12 ? 230 
    : D4 && D6 || 
    D4 && D8 || 
    D4 && D10 || 
    D4 && D12 || 
    D6 && D8 || 
    D6 && D10 || 
    D6 && D12 || 
    D8 && D10 || 
    D8 && D12 || 
    D10 && D12 ? 160 
    : D4 || D6 || D8 || D10 || D12 ? 90 : 20

    const D100Y = D4 && D6 && D8 && D10 && D12 && D20 ? 440 
    : D4 && D6 && D8 && D10 && D12 || 
    D4 && D6 && D8 && D10 && D20 ||
    D4 && D6 && D8 && D12 && D20 ||
    D4 && D6 && D10 && D12 && D20 || 
    D4 && D8 && D10 && D12 && D20 ||
    D6 && D8 && D10 && D12 && D20 ? 370 
    : D4 && D6 && D8 && D10 || 
    D4 && D6 && D8 && D12 || 
    D4 && D6 && D8 && D20 || 
    D4 && D8 && D10 && D12 || 
    D4 && D8 && D10 && D20 || 
    D4 && D8 && D12 && D20 || 
    D6 && D8 && D10 && D12 || 
    D6 && D8 && D10 && D20 || 
    D6 && D8 && D12 && D20 || 
    D6 && D10 && D12 && D20 || 
    D8 && D10 && D12 && D20 ? 300 
    : D4 && D6 && D8 || 
    D4 && D6 && D10 || 
    D4 && D6 && D12 || 
    D4 && D6 && D20 || 
    D4 && D8 && D10 || 
    D4 && D8 && D12 || 
    D4 && D8 && D20 || 
    D4 && D10 && D12 || 
    D4 && D10 && D20 || 
    D6 && D8 && D10 || 
    D6 && D8 && D12 || 
    D6 && D8 && D20 || 
    D8 && D10 && D12 ||
    D8 && D10 && D20 ||
    D8 && D12 && D20 ||
    D10 && D12 && D20 ? 230 
    : D4 && D6 || 
    D4 && D8 || 
    D4 && D10 || 
    D4 && D12 || 
    D4 && D20 || 
    D6 && D8 || 
    D6 && D10 || 
    D6 && D12 || 
    D6 && D20 || 
    D8 && D10 || 
    D8 && D12 || 
    D8 && D20 || 
    D10 && D12 ||
    D10 && D20 ||
    D12 && D20 ? 160 
    : D4 || D6 || D8 || D10 || D12 || D20 ? 90 : 20

        return <>
        {D4 && <Dice number={4} x={x} y={D4Y} width={50} text={'D4'} isTypesOfDice={isTypesOfDice}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor}
            isAllDiceMenuChapter={isAllDiceMenuChapter} allDiceMenuChapter={allDiceMenuChapter}
            changeDiceMenuChapter={changeDiceMenuChapter} />}

        {D6 && <Dice number={6} x={x} y={D6Y} width={50} text={'D6'} isTypesOfDice={isTypesOfDice}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor}
            isAllDiceMenuChapter={isAllDiceMenuChapter} allDiceMenuChapter={allDiceMenuChapter}
            changeDiceMenuChapter={changeDiceMenuChapter} />}

        {D8 && <Dice number={8} x={x} y={D8Y} width={50} text={'D8'} isTypesOfDice={isTypesOfDice}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor}
            isAllDiceMenuChapter={isAllDiceMenuChapter} allDiceMenuChapter={allDiceMenuChapter}
            changeDiceMenuChapter={changeDiceMenuChapter} />}

        {D10 && <Dice number={10} x={x} y={D10Y} width={50} text={'D10'} isTypesOfDice={isTypesOfDice}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor}
            isAllDiceMenuChapter={isAllDiceMenuChapter} allDiceMenuChapter={allDiceMenuChapter}
            changeDiceMenuChapter={changeDiceMenuChapter} />}

        {D12 && <Dice number={12} x={x} y={D12Y} width={50} text={'D12'} isTypesOfDice={isTypesOfDice}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor}
            isAllDiceMenuChapter={isAllDiceMenuChapter} allDiceMenuChapter={allDiceMenuChapter}
            changeDiceMenuChapter={changeDiceMenuChapter} />}

        {D20 && <Dice number={20} x={x} y={D20Y} width={50} text={'D20'} isTypesOfDice={isTypesOfDice}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor}
            isAllDiceMenuChapter={isAllDiceMenuChapter} allDiceMenuChapter={allDiceMenuChapter}
            changeDiceMenuChapter={changeDiceMenuChapter} />}

        {D100 && <Dice number={100} x={x} y={D100Y} width={50} text={'D100'} isTypesOfDice={isTypesOfDice}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor}
            isAllDiceMenuChapter={isAllDiceMenuChapter} allDiceMenuChapter={allDiceMenuChapter}
            changeDiceMenuChapter={changeDiceMenuChapter} />}
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

        isTypesOfDice: getIsTypesOfDice(state),

        diceColor: getDiceColor(state),
        diceColorFace: getDiceColorFace(state),
        diceNumberColor: getDiceNumberColor(state),

        isAllDiceMenuChapter: getIsAllDiceMenuChapter(state),
    }
}

export default connect(mapStateToProps, { allDiceMenuChapter, changeDiceMenuChapter })(DiceContainer)