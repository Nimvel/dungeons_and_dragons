import { FC } from 'react'

// @ts-ignore
import s from './Education.module.scss'

type EducationProps = {
    arrows: Array<string>
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

    onNoClick: () => void
    onYesClick: () => void
    onNextClick: () => void
    onEndClick: () => void
}

const Education: FC<EducationProps> = ({ isIntroduction, isNavbarChapter, isNavbarIconsChapter, isMapMenuChapter,
    isCreateMapMenuChapter, isCreateMapDimentionsChapter, isCreateMapFillChapter, isCreateMapItemsChapter,
    isCreateMapMoveItemsChapter, isCreateMapFreeButtonChapter, isCreateMapFixButtonChapter, isAddIconsMenuChapter,
    isDiceMenuChapter, isChangeDiceMenuChapter, isPaintMenuChapter, isChangeColorLineChapter, isSettingsMenuChapter, isEndChapter, isAllDiceMenuChapter,
    map, createMap, items, dice, paint, settings, diceNames, diceColor, diceBorderColor, diceNumberColor,
    onNoClick, onYesClick, onNextClick, onEndClick, arrows, icons }) => {

    return <div className={s.education}>
        {isIntroduction && <div className={s.introduction} >
            <p>
                Hi! My name's Christina and this is my portfolio.
            </p>
            <div>
                Do you want to get trained?

                <button onClick={onYesClick} >Yes</button>
                <button className='button_off' onClick={onNoClick} >No</button>
            </div>
        </div>}

        {isNavbarChapter && <>
            <img className={s.arrow_1} src={arrows[0]} />
            <div className={s.navbarChapter} >
                Click here to open the menu </div>
        </>}
        {isNavbarIconsChapter && <><img className={s.bracket_1} src={arrows[1]} />
            <div className={s.navbarIconsChapter} >
                Move the mouse cursor over any icon and you will see what it is responsible for.
            </div></>}
        {map && <div className={`${s.icons} ${s.map}`}>Select an existing map</div>}
        {createMap && <div className={`${s.icons} ${s.createMap}`}>Create your own map</div>}
        {items && <div className={`${s.icons} ${s.items}`}>Add icons of players, nps or mobs</div>}
        {dice && <div className={`${s.icons} ${s.dice}`}>Dice settings</div>}
        {paint && <div className={`${s.icons} ${s.paint}`}>Drawing</div>}
        {settings && <div className={`${s.icons} ${s.settings}`}>Border and grid settings</div>}

        {isMapMenuChapter && <div className={s.navbarIconsChapter}>
            Here you can choose a ready-made map or upload your own. When you click on an image, a map will be created with the size of the image.
            If the picture is too big, then you can move the map to see all the corners.
        </div>}

        {isCreateMapMenuChapter && <><img className={s.arrow_2} src={arrows[2]} />
            <div className={s.createMapChapter}>
                Would you like to create your own map? Then you are in the right place! Let's try to create a small map to practice. Please click on the "Create Map" button.
            </div></>}
        {isCreateMapDimentionsChapter && <div className={s.createMapChapter}>
            The size of the map is specified in cells (50px by default).
            You can change the cell size in the grid settings tab.
            <button onClick={onNextClick} >Next</button>
        </div>}
        {isCreateMapFillChapter && <><img className={s.arrow_3} src={arrows[3]} />
            <div className={s.createMapChapter}>
                Let's fill the whole map with grass. To do this, double-click on the grass icon (or any other).
            </div></>}
        {isCreateMapItemsChapter && <><img className={s.arrow_4} src={arrows[4]} />
            <div className={s.createMapChapter}>
                Now, click once on the tree icon (or any other), and then click on the map, in the cell where you want to put the tree.
            </div></>}
        {isCreateMapMoveItemsChapter && <div className={s.createMapChapter}>
            If you do not want the tree to stand exactly in the cell, then click again on the same icon in the menu to deselect it (it is marked with a red border). Then, click and hold on a tree on the map to drag it where you want it.
        </div>}
        {isCreateMapFreeButtonChapter && <><img className={s.arrow_5} src={arrows[5]} />
            <div className={s.createMapChapter}>
                The "free" button is responsible for the ability to move elements not evenly across the cells. Click on this button and now try to move the tree.
            </div></>}
        {isCreateMapFixButtonChapter && <><img className={s.arrow_6} src={arrows[6]} />
            <div className={s.createMapChapter}>
                When you have completed the map, you can click on the "fix" button so that you don't accidentally move anything.
            </div></>}

        {isAddIconsMenuChapter && <div className={s.navbarIconsChapter}>
            Here you can add player, npc or mob icons to the map. You can also move these icons around the map.
        </div>}

        {isDiceMenuChapter && <><img className={s.arrow_7} src={arrows[7]} />
            <div className={s.navbarIconsChapter}>
                If during the game you need dice, then you can turn them on here. Let's add everything at once. Click on the "All Dice" button.
            </div></>}
        {isAllDiceMenuChapter && <><img className={s.bracket_2} src={arrows[8]} />
            <div className={s.clickDiceMenuChapter}>
                Click on any dice to get a random value.
            </div></>}
        {isChangeDiceMenuChapter && <><img className={s.bracket_3} src={arrows[9]} />
            <div className={s.changeDiceChapter}>
                Also, you can change the design of the dice, or remove the dice you don't need. Hover over any of these buttons to see what it does.
            </div></>}

        {diceNames && <div className={`${s.icons} ${s.diceNames}`}>Shows the dice's types</div>}
        {diceColor && <div className={`${s.icons} ${s.diceColor}`}>Changes the dice's color</div>}
        {diceBorderColor && <div className={`${s.icons} ${s.diceBorderColor}`}>Changes the borders's color</div>}
        {diceNumberColor && <div className={`${s.icons} ${s.diceNumberColor}`}>Changes the number's color</div>}

        {isPaintMenuChapter && <><img className={s.arrow_2} src={arrows[2]} />
            <div className={s.createMapChapter}>
                Would you like to make notes on the map? It's not difficult at all! Click on the "pencil" button to draw a freehand line or click on the "line" button to draw a straight line.
            </div></>}
        {isChangeColorLineChapter && <><img className={s.arrow_8} src={arrows[10]} />
            <div className={s.createMapChapter}>
                To change the color of the next line, click here. And if you want to change the line size, click here.
            </div></>}

        {isSettingsMenuChapter && <div className={s.navbarIconsChapter}>
            Here you can enable/disable borders and grid, you can also adjust grid size and border and grid colors. If you want to change the color at the borders and the grid at once, then click the "same colors" button.
        </div>}

        {isEndChapter && <div className={s.EndChapter}>
            Congratulations! ^~^<img src={icons[0]} className={s.firework_1} />
            <p>To continue learning, click on any other icon of the start menu. Or do you want to finish the training and start using the site?</p>
            <img src={icons[1]} className={s.firework_2} />
            <button onClick={onEndClick}>Finish</button>
        </div>}
    </div>
}

export default Education