import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../redux/store'

import { openNavbar, closeEducation } from '../../redux/app-reducer'
import { updateMapDimensions } from '../../redux/map-reducer'
import { onBorders, onGrid } from '../../redux/options-reducer'
import { onAllDice } from '../../redux/dice-reducer'
import { onFreeMovement } from '../../redux/backgrounds-reducer'
import {
    introduction, navbarChapter, createMapDimentionsChapter,
    createMapFillChapter, endChapter
} from '../../redux/education-reducer'

import Education from './Education'
import {
    getIsAddIconsMenuChapter, getIsCreateMapMenuChapter, getIsDiceMenuChapter,
    getIsIntroduction, getIsMapMenuChapter, getIsNavbarChapter,
    getIsNavbarIconsChapter, getIsPaintMenuChapter, getNavbarCreateMapChapter,
    getNavbarDiceChapter, getNavbarItemsChapter, getNavbarMapChapter,
    getNavbarPaintChapter, getNavbarSettingsChapter, getIsSettingsMenuChapter,
    getIsCreateMapDimentionsChapter, getIsCreateMapItemsChapter, getIsCreateMapFillChapter,
    getIsCreateMapMoveItemsChapter, getIsCreateMapFreeButtonChapter, getIsCreateMapFixButtonChapter,
    getIsEndChapter, getIsAllDiceMenuChapter, getIsChangeDiceMenuChapter,
    getDiceNames, getDiceColor, getDiceBorderColor, getDiceNumberColor,
    getIsChangeColorLineChapter, getArrows, getIcons, getSmallArrows
} from '../../redux/education-selectors'

import { } from '../../redux/education-selectors'


type MapStateToPropsType = {
    arrows: Array<string>
    smallArrows: Array<string>
    icons: Array<string>

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
    onBorders: (borders: boolean) => void
    onGrid: (grid: boolean) => void
    onAllDice: (isAllDice: boolean) => void
    onFreeMovement: (isFreeMovement: boolean) => void
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

const EducationContainer: FC<EducationContainerProps> = ({
    arrows, smallArrows, icons, 
    map, createMap, items, dice, paint, settings,

    isIntroduction, isNavbarChapter, isNavbarIconsChapter,

    isMapMenuChapter, isAddIconsMenuChapter, isDiceMenuChapter,
    isAllDiceMenuChapter, isChangeDiceMenuChapter, isEndChapter,
    isPaintMenuChapter, isChangeColorLineChapter, isSettingsMenuChapter, isCreateMapMenuChapter,

    isCreateMapDimentionsChapter, isCreateMapFillChapter, isCreateMapItemsChapter,
    isCreateMapMoveItemsChapter, isCreateMapFreeButtonChapter, isCreateMapFixButtonChapter,

    diceNames, diceColor, diceBorderColor, diceNumberColor,

    openNavbar, onBorders, onGrid, onAllDice, onFreeMovement, closeEducation,
    introduction, navbarChapter, updateMapDimensions,
    createMapDimentionsChapter, createMapFillChapter, endChapter,
}) => {

    React.useEffect(() => {}, [window.innerWidth])

    const onNoClick = () => {
        openNavbar()
        onBorders(true)
        onGrid(true)
        onAllDice(true)
        closeEducation()
        introduction(false)
    }

    const onYesClick = () => {
        introduction(false)
        navbarChapter(true)
        onAllDice(false)
        onFreeMovement(true)
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

    return <Education isIntroduction={isIntroduction} smallArrows={smallArrows} isNavbarChapter={isNavbarChapter} arrows={arrows}
        isNavbarIconsChapter={isNavbarIconsChapter} isMapMenuChapter={isMapMenuChapter} isCreateMapMenuChapter={isCreateMapMenuChapter}
        isCreateMapDimentionsChapter={isCreateMapDimentionsChapter} isCreateMapFillChapter={isCreateMapFillChapter} isCreateMapItemsChapter={isCreateMapItemsChapter}
        isCreateMapMoveItemsChapter={isCreateMapMoveItemsChapter} isCreateMapFreeButtonChapter={isCreateMapFreeButtonChapter}
        isCreateMapFixButtonChapter={isCreateMapFixButtonChapter} isEndChapter={isEndChapter} icons={icons}
        isAddIconsMenuChapter={isAddIconsMenuChapter} isDiceMenuChapter={isDiceMenuChapter} isAllDiceMenuChapter={isAllDiceMenuChapter}
        isChangeDiceMenuChapter={isChangeDiceMenuChapter} isPaintMenuChapter={isPaintMenuChapter} isChangeColorLineChapter={isChangeColorLineChapter}
        isSettingsMenuChapter={isSettingsMenuChapter} map={map} createMap={createMap} items={items} dice={dice} paint={paint}
        diceNames={diceNames} diceColor={diceColor} diceBorderColor={diceBorderColor} diceNumberColor={diceNumberColor}
        settings={settings} onNoClick={onNoClick} onYesClick={onYesClick} onNextClick={onNextClick} onEndClick={onEndClick} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        arrows: getArrows(state),
        smallArrows: getSmallArrows(state),
        icons: getIcons(state),

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
    openNavbar, onBorders, onGrid, onAllDice, onFreeMovement, closeEducation,
    introduction, navbarChapter, updateMapDimensions,
    createMapDimentionsChapter, createMapFillChapter, endChapter,
})(EducationContainer)