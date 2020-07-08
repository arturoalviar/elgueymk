import { remCalc } from '@styles/mixins'

const grid = {
  smGap: remCalc(14),
  mdGap: remCalc(20),
  lgGap: remCalc(30),
}

const container = {
  gutter: remCalc(32),
  gutters: remCalc(32 * 2),
  smWidth: remCalc(800 + 32 * 2),
  mdWidth: remCalc(1100 + 32 * 2),
  lgWidth: remCalc(1440 + 32 * 2),
  xlWidth: remCalc(1600 + 32 * 2),
}

const padding = {
  sm: remCalc(16),
  md: remCalc(24),
  lg: remCalc(32),
  xl: remCalc(50),
  xxl: remCalc(80),
}

const header = {
  mHeight: remCalc(80),
}

const units = {
  container,
  grid,
  padding,
  header,
}

export default units
