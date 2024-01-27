import {pixelsToRem as _hidden} from "@/helpers/converter/pixelsToRem";

const DARK = '@media (prefers-color-scheme: dark)'

const deviceBreakpointsStylex = {
    '--PHONE': 500,
    '--TABLET': 1000,
    '--LAPTOP': 1500,
    '--DESKTOP': 2000
}

const screenQuery = '@media only screen and'
const widthQuery = (key: keyof typeof deviceBreakpointsStylex) => `(max-width: ${_hidden(deviceBreakpointsStylex[key])}rem)`

// export const PHONE = `${screenQuery} and ${widthQuery("--PHONE")}`
export const PHONE = '@media only screen and (max-width: 31.25rem)'
export const TABLET = '@media only screen and (max-width: 62.5rem)'
export const LAPTOP = '@media only screen and (max-width: 93.75rem)'
export const DESKTOP ='@media only screen and (max-width: 125rem)'

export const media = {
    DARK

}
