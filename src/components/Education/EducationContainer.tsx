import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../redux/store'

import { openNavbar, closeEducation } from '../../redux/app-reducer'
import { updateMapDimensions } from '../../redux/map-reducer'
import { onBorders, onGrid } from '../../redux/options-reducer'
import { onAllDice } from '../../redux/dice-reducer'
import {
    introduction, navbarChapter, createMapDimentionsChapter, createMapFillChapter,
    endChapter
} from '../../redux/education-reducer'
// import {} from '../../redux/dice-selectors'

import Education from './Education'
import {
    getIsAddIconsMenuChapter, getIsCreateMapMenuChapter, getIsDiceMenuChapter, getIsIntroduction,
    getIsMapMenuChapter, getIsNavbarChapter, getIsNavbarIconsChapter, getIsPaintMenuChapter, getNavbarCreateMapChapter,
    getNavbarDiceChapter, getNavbarItemsChapter, getNavbarMapChapter, getNavbarPaintChapter, getNavbarSettingsChapter,
    getIsSettingsMenuChapter, getIsCreateMapDimentionsChapter, getIsCreateMapItemsChapter, getIsCreateMapFillChapter,
    getIsCreateMapMoveItemsChapter, getIsCreateMapFreeButtonChapter, getIsCreateMapFixButtonChapter, getIsEndChapter,
    getIsAllDiceMenuChapter, getIsChangeDiceMenuChapter, getDiceNames, getDiceColor, getDiceBorderColor, getDiceNumberColor, getIsChangeColorLineChapter
} from '../../redux/education-selectors'

import { } from '../../redux/education-selectors'


type MapStateToPropsType = {
    isIntroduction: boolean
    isNavbarChapter: boolean
    isNavbarIconsChapter: boolean

    map: boolean
    createMap: boolean
    items: boolean
    dice: boolean
    paint: boolean
    settings: boolean

    isMapMenuChapter: boolean

    isCreateMapMenuChapter: boolean
    isCreateMapDimentionsChapter: boolean
    isCreateMapFillChapter: boolean
    isCreateMapItemsChapter: boolean
    isCreateMapMoveItemsChapter: boolean
    isCreateMapFreeButtonChapter: boolean
    isCreateMapFixButtonChapter: boolean
    isEndChapter: boolean

    isAddIconsMenuChapter: boolean

    isDiceMenuChapter: boolean
    isAllDiceMenuChapter: boolean
    isChangeDiceMenuChapter: boolean

    diceNames: boolean
    diceColor: boolean
    diceBorderColor: boolean
    diceNumberColor: boolean

    isPaintMenuChapter: boolean
    isChangeColorLineChapter: boolean

    isSettingsMenuChapter: boolean
}

type MapDispatchToPropsType = {
    openNavbar: () => void
    onBorders: () => void
    onGrid: () => void
    onAllDice: () => void
    closeEducation: () => void

    introduction: (isIntroduction: boolean) => void
    navbarChapter: (isNavbarChapter: boolean) => void
    updateMapDimensions: (width: number, height: number) => void

    createMapDimentionsChapter: (isCreateMapDimentionsChapter: boolean) => void
    createMapFillChapter: (isCreateMapItemsChapter: boolean) => void
    endChapter: (isEndChapter: boolean) => void
}

type OwnPropsType = {
}

type EducationContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const EducationContainer: FC<EducationContainerProps> = ({ isIntroduction, isNavbarChapter, isNavbarIconsChapter,
    isMapMenuChapter, isCreateMapMenuChapter, isCreateMapDimentionsChapter, isCreateMapFillChapter, isCreateMapItemsChapter,
    isCreateMapMoveItemsChapter, isCreateMapFreeButtonChapter, isCreateMapFixButtonChapter, isAddIconsMenuChapter,
    isDiceMenuChapter, isAllDiceMenuChapter, isChangeDiceMenuChapter, isPaintMenuChapter, isChangeColorLineChapter, isSettingsMenuChapter, isEndChapter,
    map, createMap, items, dice, paint, settings, diceNames, diceColor, diceBorderColor, diceNumberColor,
    onBorders, onGrid, onAllDice, openNavbar, closeEducation, introduction, navbarChapter,
    updateMapDimensions, createMapDimentionsChapter, createMapFillChapter, endChapter
}) => {

    const onNoClick = () => {
        openNavbar()
        onBorders()
        onGrid()
        onAllDice()
        closeEducation()
    }

    const onYesClick = () => {
        introduction(false)
        navbarChapter(true)
        updateMapDimensions(250, 250)
    }

    const onNextClick = () => {
        createMapDimentionsChapter(false)
        createMapFillChapter(true)
    }

    const onEndClick = () => {
        endChapter(false)
        closeEducation()
    }

    return <Education isIntroduction={isIntroduction} isNavbarChapter={isNavbarChapter}
        isNavbarIconsChapter={isNavbarIconsChapter} isMapMenuChapter={isMapMenuChapter} isCreateMapMenuChapter={isCreateMapMenuChapter}
        isCreateMapDimentionsChapter={isCreateMapDimentionsChapter} isCreateMapFillChapter={isCreateMapFillChapter} isCreateMapItemsChapter={isCreateMapItemsChapter}
        isCreateMapMoveItemsChapter={isCreateMapMoveItemsChapter} isCreateMapFreeButtonChapter={isCreateMapFreeButtonChapter}
        isCreateMapFixButtonChapter={isCreateMapFixButtonChapter} isEndChapter={isEndChapter}
        isAddIconsMenuChapter={isAddIconsMenuChapter} isDiceMenuChapter={isDiceMenuChapter} isAllDiceMenuChapter={isAllDiceMenuChapter}
        isChangeDiceMenuChapter={isChangeDiceMenuChapter} isPaintMenuChapter={isPaintMenuChapter} isChangeColorLineChapter={isChangeColorLineChapter}
        isSettingsMenuChapter={isSettingsMenuChapter} map={map} createMap={createMap} items={items} dice={dice} paint={paint}
        diceNames={diceNames} diceColor={diceColor} diceBorderColor={diceBorderColor} diceNumberColor={diceNumberColor}
        settings={settings} onNoClick={onNoClick} onYesClick={onYesClick} onNextClick={onNextClick} onEndClick={onEndClick} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isIntroduction: getIsIntroduction(state),
        isNavbarChapter: getIsNavbarChapter(state),
        isNavbarIconsChapter: getIsNavbarIconsChapter(state),

        map: getNavbarMapChapter(state),
        createMap: getNavbarCreateMapChapter(state),
        items: getNavbarItemsChapter(state),
        dice: getNavbarDiceChapter(state),
        paint: getNavbarPaintChapter(state),
        settings: getNavbarSettingsChapter(state),

        isMapMenuChapter: getIsMapMenuChapter(state),

        isCreateMapMenuChapter: getIsCreateMapMenuChapter(state),
        isCreateMapDimentionsChapter: getIsCreateMapDimentionsChapter(state),
        isCreateMapFillChapter: getIsCreateMapFillChapter(state),
        isCreateMapItemsChapter: getIsCreateMapItemsChapter(state),
        isCreateMapMoveItemsChapter: getIsCreateMapMoveItemsChapter(state),
        isCreateMapFreeButtonChapter: getIsCreateMapFreeButtonChapter(state),
        isCreateMapFixButtonChapter: getIsCreateMapFixButtonChapter(state),
        isEndChapter: getIsEndChapter(state),

        isAddIconsMenuChapter: getIsAddIconsMenuChapter(state),

        isDiceMenuChapter: getIsDiceMenuChapter(state),
        isAllDiceMenuChapter: getIsAllDiceMenuChapter(state),
        isChangeDiceMenuChapter: getIsChangeDiceMenuChapter(state),

        diceNames: getDiceNames(state),
        diceColor: getDiceColor(state),
        diceBorderColor: getDiceBorderColor(state),
        diceNumberColor: getDiceNumberColor(state),

        isPaintMenuChapter: getIsPaintMenuChapter(state),
        isChangeColorLineChapter: getIsChangeColorLineChapter(state),
        isSettingsMenuChapter: getIsSettingsMenuChapter(state)
    }
}

export default connect(mapStateToProps, {
    onBorders, onGrid, onAllDice, openNavbar, closeEducation,
    introduction, navbarChapter, updateMapDimensions, createMapDimentionsChapter,
    createMapFillChapter, endChapter
})(EducationContainer)