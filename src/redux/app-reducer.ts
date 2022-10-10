const CLOSE_NAVBAR = 'app/CLOSE_NAVBAR'
const OPEN_NAVBAR = 'app/OPEN_NAVBAR'

const CLOSE_MENU = 'app/CLOSE_MENU'
const OPEN_MENU = 'app/OPEN_MENU'

type initialStateType = {
    isNavbarActive: boolean
    isMenuActive: boolean
}

const initialState = {
    isNavbarActive: false,
    isMenuActive: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case CLOSE_NAVBAR:
            return {...state, isNavbarActive: false }
        case OPEN_NAVBAR:
            return {...state, isNavbarActive: true }

        case CLOSE_MENU:
            return {...state, isMenuActive: false }
        case OPEN_MENU:
            return {...state, isMenuActive: true }
    }
    return state
}

type closeNavbarType = {
    type: typeof CLOSE_NAVBAR
}
type openNavbarType = {
    type: typeof OPEN_NAVBAR
}
export const closeNavbar = (): closeNavbarType => ({type: CLOSE_NAVBAR});
export const openNavbar = (): openNavbarType => ({type: OPEN_NAVBAR});

type closeMenuType = {
    type: typeof CLOSE_MENU
}
type openMenuType = {
    type: typeof OPEN_MENU
}
export const closeMenu = (): closeMenuType => ({type: CLOSE_MENU});
export const openMenu = (): openMenuType => ({type: OPEN_MENU});

export default appReducer;