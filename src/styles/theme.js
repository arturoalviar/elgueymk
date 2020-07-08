import { minMedia, maxMedia } from '@styles/breakpoints'
import colors, { darkThemeColors, lightThemeColors } from '@styles/colors'
import { remCalc } from '@styles/mixins'
import units from '@styles/units'

const theme = {
  colors,
  minMedia,
  maxMedia,
  remCalc,
  units,
}

const darkTheme = {
  ...theme,
  mode: 'dark',
  colors: {
    ...theme.colors,
    ...darkThemeColors,
  },
}

const lightTheme = {
  ...theme,
  mode: 'light',
  colors: {
    ...theme.colors,
    ...lightThemeColors,
  },
}

export default theme
export { darkTheme, lightTheme }
