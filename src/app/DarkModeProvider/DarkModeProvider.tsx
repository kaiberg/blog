'use client'

import React from "react";
import {SetDarkModeCookie} from "@/app/DarkModeProvider/actions";

export type Themes = 'light' | 'dark'
type DarkMode = {
    value: Themes | undefined,
    setValue: (value?: Themes) => void
} | undefined

export type DarkModeVar = 'color-mode'
export const DarkModeVariableName : DarkModeVar = 'color-mode';
export const DarkModeContext = React.createContext<DarkMode>(undefined);

type ProviderProps = { children: React.ReactNode }
function DarkModeProvider({children}: ProviderProps) {
    const [darkMode, setRawDarkMode] = React.useState<Themes>();

    React.useEffect(() => {
        const {documentElement} = window.document;
        if(!documentElement.getAttribute(DarkModeVariableName)) {
            const prefersDarkMediaQuery = window.matchMedia('prefers-color-scheme: dark');
            setColorMode(prefersDarkMediaQuery ? 'dark' : 'light');
        }
    }, [])

    function setColorMode(value: Themes = 'light') {
        if(value !== 'light' && value !== 'dark')
            return;

        const {documentElement} = window.document;
        setRawDarkMode(value);
        SetDarkModeCookie(value);
        // no react function owns this element, so this is fine
        documentElement.setAttribute(`data-${DarkModeVariableName}`, value);
    }

    const ProviderValue = React.useMemo(() => {
        return {value: darkMode, setValue: setColorMode};
    }, [darkMode])

    return <DarkModeContext.Provider value={ProviderValue}>
        {children}
    </DarkModeContext.Provider>
}
export default DarkModeProvider;