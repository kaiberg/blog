'use client'

import React from "react";
import {SetDarkModeCookie} from "@/ui/components/DarkModeProvider/actions";

export type LightTheme = 'light';
export type DarkTheme = 'dark';
export type Themes = LightTheme | DarkTheme
export const colorModes: {
    [key: string]: Themes
} = {
    light: 'light',
    dark: 'dark'
}

type DarkMode = {
    value: Themes | undefined,
    setValue: (value?: Themes) => void
} | undefined

export type DarkModeVar = 'data-color-mode'
export const DarkModeVariableName : DarkModeVar = 'data-color-mode';

export const DarkModeContext = React.createContext<DarkMode>(undefined);

type ProviderProps = { children: React.ReactNode }

const { dark, light } = colorModes;

function DarkModeProvider({children}: ProviderProps) {
    const [darkMode, setRawDarkMode] = React.useState<Themes>();

    React.useEffect(() => {
        const {documentElement} = window.document;
        const mode = documentElement.getAttribute(DarkModeVariableName);
        if(Object.values(colorModes).includes(mode as Themes))
            setRawDarkMode(mode as Themes);
        else {
            const prefersDarkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setColorMode(prefersDarkMediaQuery ? dark : light);
        }
    }, [])

    function setColorMode(value: Themes = dark) {
        if(!Object.values(colorModes).includes(value))
            return;

        const {documentElement} = window.document;
        setRawDarkMode(value);
        SetDarkModeCookie(value);
        // no react function owns this element, so this is fine
        documentElement.setAttribute(DarkModeVariableName, value);
    }

    const ProviderValue = React.useMemo(() => {
        return {value: darkMode, setValue: setColorMode};
    }, [darkMode])

    return <DarkModeContext.Provider value={ProviderValue}>
        {children}
    </DarkModeContext.Provider>
}
export default DarkModeProvider;