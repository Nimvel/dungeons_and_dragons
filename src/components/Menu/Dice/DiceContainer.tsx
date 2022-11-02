import React, { FC } from 'react'
import { connect } from 'react-redux'

import {
    addD4, deleteD4, addD6, deleteD6, addD8, deleteD8, addD10, deleteD10,
    addD12, deleteD12, addD20, deleteD20, addD100, deleteD100,
    changeDiceColor, changeDiceColorFace, changeDiceNumberColor
} from '../../../redux/map-reducer'
import { 
    getDiceColor, getDiceNumberColor, getD100, getD20, getD12, getD10, getD8, getD6, getD4, getDiceColorFace 
} from '../../../redux/map-selectors'
import { AppStateType } from '../../../redux/store'

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
    addD4: () => void
    deleteD4: () => void
    addD6: () => void
    deleteD6: () => void
    addD8: () => void
    deleteD8: () => void
    addD10: () => void
    deleteD10: () => void
    addD12: () => void
    deleteD12: () => void
    addD20: () => void
    deleteD20: () => void
    addD100: () => void
    deleteD100: () => void
    changeDiceColor: (color: string) => void 
    changeDiceColorFace: (color: string) => void
    changeDiceNumberColor: (color: string) => void
}

type OwnPropsType = {
}

type DiceContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const DiceContainer: FC<DiceContainerProps> = (
    { diceColor, diceColorFace, diceNumberColor, D4, D6, D8, D10, D12, D20, D100,
        addD4, deleteD4, addD6, deleteD6, addD8, deleteD8, addD10, deleteD10,
        addD12, deleteD12, addD20, deleteD20, addD100, deleteD100,
        changeDiceColor, changeDiceColorFace, changeDiceNumberColor }) => {

    const onChangeDiceColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeDiceColor(e.target.value)
    }

    const onChangeDiceColorFace = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeDiceColorFace(e.target.value)
    }

    const onChangeDiceNumberColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeDiceNumberColor(e.target.value)
    }

    return <Dice diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} 
    D4={D4} D6={D6} D8={D8} D10={D10} D12={D12} D20={D20} D100={D100}
        addD4={addD4} deleteD4={deleteD4} addD6={addD6} deleteD6={deleteD6} addD8={addD8} deleteD8={deleteD8}
        addD10={addD10} deleteD10={deleteD10} addD12={addD12} deleteD12={deleteD12} addD20={addD20}
        deleteD20={deleteD20} addD100={addD100} deleteD100={deleteD100}
        onChangeDiceColor={onChangeDiceColor} onChangeDiceColorFace={onChangeDiceColorFace} onChangeDiceNumberColor={onChangeDiceNumberColor} />
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

export default connect(mapStateToProps,
    {
        addD4, deleteD4, addD6, deleteD6, addD8, deleteD8, addD10, deleteD10,
        addD12, deleteD12, addD20, deleteD20, addD100, deleteD100,
        changeDiceColor, changeDiceColorFace, changeDiceNumberColor
    }
)(DiceContainer)