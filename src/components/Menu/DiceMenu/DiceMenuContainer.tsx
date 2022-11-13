import React, { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import {
    onAllDice, onD4, onD6, onD8, onD10, onD12, onD20, onD100, onTypesOfDice,
    changeDiceColor, changeDiceColorFace, changeDiceNumberColor
} from '../../../redux/dice-reducer'
import {
    menuChapters, allDiceMenuChapter, onChangeDiceButtonsMove, endChapter,
    changeDiceMenuChapter
} from '../../../redux/education-reducer'

import {
    getDiceColor, getDiceNumberColor, getD100, getD20, getD12,
    getD10, getD8, getD6, getD4, getDiceColorFace, getIsTypesOfDice
} from '../../../redux/dice-selectors'
import { getChangeDiceButtons, getIsChangeDiceMenuChapter, getIsDiceMenuChapter, getIsEndChapter } from '../../../redux/education-selectors'


import DiceMenu from './DiceMenu'

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

    isDiceMenuChapter: boolean
    changeDiceButtons: Array<string>
    isChangeDiceMenuChapter: boolean

    isEndChapter: boolean
}

type MapDispatchToPropsType = {
    onAllDice: (isAllDice: boolean) => void

    onD4: () => void
    onD6: () => void
    onD8: () => void
    onD10: () => void
    onD12: () => void
    onD20: () => void
    onD100: () => void

    onTypesOfDice: () => void

    changeDiceColor: (color: string) => void
    changeDiceColorFace: (color: string) => void
    changeDiceNumberColor: (color: string) => void

    menuChapters: (icon: string) => void
    allDiceMenuChapter: (isAllDiceMenuChapter: boolean) => void
    onChangeDiceButtonsMove: (button: string) => void

    changeDiceMenuChapter: (isChangeDiceMenuChapter: boolean) => void
    endChapter: (isEndChapter: boolean) => void
}

type OwnPropsType = {
}

type DiceMenuContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const DiceMenuContainer: FC<DiceMenuContainerProps> = ({D4, D6, D8, D10, D12, D20, D100, isTypesOfDice, diceColor, diceColorFace,
    diceNumberColor, isDiceMenuChapter, changeDiceButtons, isChangeDiceMenuChapter, isEndChapter,

    onAllDice, onD4, onD6, onD8, onD10, onD12, onD20, onD100, onTypesOfDice,

    changeDiceColor, changeDiceColorFace, changeDiceNumberColor,
    menuChapters, allDiceMenuChapter, onChangeDiceButtonsMove,
    changeDiceMenuChapter, endChapter }) => {

    const onChangeDiceColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeDiceColor(e.target.value)

        if (isChangeDiceMenuChapter) {
            changeDiceMenuChapter(false)
            endChapter(true)
        }
    }

    const onChangeDiceColorFace = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeDiceColorFace(e.target.value)

        if (isChangeDiceMenuChapter) {
            changeDiceMenuChapter(false)
            endChapter(true)
        }
    }

    const onChangeDiceNumberColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeDiceNumberColor(e.target.value)

        if (isChangeDiceMenuChapter) {
            changeDiceMenuChapter(false)
            endChapter(true)
        }
    }

    const onAllDiceClick = () => {
        D4 && D6 && D8 && D10 && D12 && D20 && D100 ? onAllDice(false) : onAllDice(true)

        if (isDiceMenuChapter) {
            menuChapters('')
            allDiceMenuChapter(true)
        }
    }

    const onDiceButtonMouseMove = (button) => {
        if (isChangeDiceMenuChapter || isEndChapter) {
            onChangeDiceButtonsMove(button)
        }
    }

    const onDiceButtonMouseLeave = () => {
        onChangeDiceButtonsMove('')
    }

    return <DiceMenu diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor}
        D4={D4} D6={D6} D8={D8} D10={D10} D12={D12} D20={D20} D100={D100} onTypesOfDice={onTypesOfDice}
        onD4={onD4} onD6={onD6} onD8={onD8} onD10={onD10} onD12={onD12} onD20={onD20} onD100={onD100}
        onAllDiceClick={onAllDiceClick} onChangeDiceColor={onChangeDiceColor} onChangeDiceColorFace={onChangeDiceColorFace}
        onChangeDiceNumberColor={onChangeDiceNumberColor} isTypesOfDice={isTypesOfDice}
        onDiceButtonMouseMove={onDiceButtonMouseMove} onDiceButtonMouseLeave={onDiceButtonMouseLeave}
        changeDiceButtons={changeDiceButtons} />
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

        isDiceMenuChapter: getIsDiceMenuChapter(state),
        changeDiceButtons: getChangeDiceButtons(state),
        isChangeDiceMenuChapter: getIsChangeDiceMenuChapter(state),
        isEndChapter: getIsEndChapter(state),
    }
}

export default connect(mapStateToProps, {
    onAllDice, onD4, onD6, onD8, onD10, onD12, onD20, onD100, onTypesOfDice,

    changeDiceColor, changeDiceColorFace, changeDiceNumberColor,
    menuChapters, allDiceMenuChapter, onChangeDiceButtonsMove,
    changeDiceMenuChapter, endChapter
}
)(DiceMenuContainer)