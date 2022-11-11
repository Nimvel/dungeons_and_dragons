const CLOSE_EDUCATION = 'app/CLOSE_EDUCATION'

const CLOSE_NAVBAR = 'app/CLOSE_NAVBAR'
const OPEN_NAVBAR = 'app/OPEN_NAVBAR'

const CLOSE_MENU = 'app/CLOSE_MENU'
const OPEN_MENU = 'app/OPEN_MENU'

type initialStateType = {
    isEducationActive: boolean
    isNavbarActive: boolean
    isMenuActive: boolean
}

const initialState = {
    isEducationActive: true,
    isNavbarActive: false,
    isMenuActive: false
}

const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case CLOSE_EDUCATION:
            return { ...state, isEducationActive: false }

        case CLOSE_NAVBAR:
            return { ...state, isNavbarActive: false }

        case OPEN_NAVBAR:
            return { ...state, isNavbarActive: true }

        case CLOSE_MENU:
            return { ...state, isMenuActive: false }

        case OPEN_MENU:
            return { ...state, isMenuActive: true }

        default:
            return state
    }
}

type ActionsTypes = closeEducationType | closeNavbarType | openNavbarType | closeMenuType | openMenuType

type closeEducationType = {
    type: typeof CLOSE_EDUCATION
}
export const closeEducation = (): closeEducationType => ({ type: CLOSE_EDUCATION })

type closeNavbarType = {
    type: typeof CLOSE_NAVBAR
}
export const closeNavbar = (): closeNavbarType => ({ type: CLOSE_NAVBAR })

type openNavbarType = {
    type: typeof OPEN_NAVBAR
}
export const openNavbar = (): openNavbarType => ({ type: OPEN_NAVBAR })

type closeMenuType = {
    type: typeof CLOSE_MENU
}
export const closeMenu = (): closeMenuType => ({ type: CLOSE_MENU })

type openMenuType = {
    type: typeof OPEN_MENU
}
export const openMenu = (): openMenuType => ({ type: OPEN_MENU })

export default appReducer