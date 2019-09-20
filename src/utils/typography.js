import Typography from "typography"
//import fairyGateTheme from "typography-theme-fairy-gates"
//import wordpress2016Theme from 'typography-theme-wordpress-2016'
import StAnnesTheme from 'typography-theme-st-annes'

StAnnesTheme.overrideThemeStyles = () => {
    return {

    }
}

const typography = new Typography(StAnnesTheme)

export const { scale, rhythm, options } = typography
export default typography

