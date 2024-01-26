import * as stylex from "@stylexjs/stylex"
import {pixelsToRem} from "@/helpers/converter/pixelsToRem";

const DARK = '@media (prefers-color-scheme: dark)'

const breakpointsStylex = {
    '--PHONE': 500,
    '--TABLET': 1000,
    '--LAPTOP': 1500,
    '--DESKTOP': 2000
}

const screenQuery = '@media only screen and'
const widthQuery = (widthPX: number) => `(max-width: ${pixelsToRem(widthPX)})`

export const PHONE = `${screenQuery} and ${widthQuery(breakpointsStylex["--PHONE"])}`
export const TABLET = `${screenQuery} and ${widthQuery(breakpointsStylex["--TABLET"])}`
export const LAPTOP = `${screenQuery} and ${widthQuery(breakpointsStylex["--LAPTOP"])}`
export const DESKTOP = `${screenQuery} and ${widthQuery(breakpointsStylex["--DESKTOP"])}`
