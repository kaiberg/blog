import * as stylex from "@stylexjs/stylex"

const DARK = '@media (prefers-color-scheme: dark)'

export const colors = stylex.defineVars({
    background: { default: 'white', [DARK]: 'gray' },
    primary: { default: 'green', [DARK]: 'darkgreen' },
    error: { default: 'red', [DARK]: 'darkred' }
})