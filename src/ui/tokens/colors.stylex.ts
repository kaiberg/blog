import * as stylex from "@stylexjs/stylex"

const DARK = '@media (prefers-color-scheme: dark)'

export const colors = stylex.defineVars({
    background: { default: 'hsl(45,80%,98%)', [DARK]: 'hsl(75,8%,10%)' },
    text: { default: 'hsl(75,8%,10%)', [DARK]: 'hsl(51,11%,88%)' },
    primary: { default: 'hsl(88,45%,28%)', [DARK]: 'hsl(88,46%,67%)' },
    secondary: { default: 'hsl(85,11%,34%)', [DARK]: 'hsl(82,18%,75%)' },
    tertiary: { default: 'hsl(176,20%,33%)', [DARK]: 'hsl(174,27%,74%)' },
    error: { default: 'hsl(0,75%,42%)', [DARK]: 'hsl(6,100%,84%)' }
})