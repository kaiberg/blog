import * as stylex from "@stylexjs/stylex"

const DARK_QUERY = '@media (prefers-color-scheme: dark)';

const colorTokens = {
    background: {
        light: 'hsl(45,80%,98%)',
        dark: 'hsl(75,8%,10%)',
    },
    text: {
        light: 'hsl(75,8%,10%)',
        dark: 'hsl(51,11%,88%)',
    },
    primary: {
        light: 'hsl(88,45%,28%)',
        dark: 'hsl(88,46%,67%)',
    },
    secondary: {
        light: 'hsl(85,11%,34%)',
        dark: 'hsl(82,18%,75%)',
    },
    tertiary: {
        light: 'hsl(176,20%,33%)',
        dark: 'hsl(174,27%,74%)',
    },
    error: {
        light: 'hsl(0,75%,42%)',
        dark: 'hsl(6,100%,84%)',
    }
}

export const colors = stylex.defineVars<{
    [key: string]: {
        default: string
        [DARK_QUERY]: string,
    }
}>({
    background: {
        default: colorTokens.background.light,
        [DARK_QUERY]: colorTokens.background.dark,
    },
    text: {
        default: colorTokens.text.light,
        [DARK_QUERY]: colorTokens.text.dark,
    },
    primary: {
        default: colorTokens.primary.light,
        [DARK_QUERY]: colorTokens.primary.dark,
    },
    secondary: {
        default: colorTokens.secondary.light,
        [DARK_QUERY]: colorTokens.secondary.dark,
    },
    tertiary: {
        default: colorTokens.tertiary.light,
        [DARK_QUERY]: colorTokens.tertiary.dark,
    },
    error: {
        default: colorTokens.error.light,
        [DARK_QUERY]: colorTokens.error.dark,
    }
})

export const lightMode = stylex.createTheme(colors, {
    background: colorTokens.background.light,
    text: colorTokens.text.light,
    primary: colorTokens.primary.light,
    secondary: colorTokens.secondary.light,
    tertiary: colorTokens.tertiary.light,
    error: colorTokens.error.light,
})

export const darkMode = stylex.createTheme(colors, {
    background: colorTokens.background.dark,
    text: colorTokens.text.dark,
    primary: colorTokens.primary.dark,
    secondary: colorTokens.secondary.dark,
    tertiary: colorTokens.tertiary.dark,
    error: colorTokens.error.dark,
})
