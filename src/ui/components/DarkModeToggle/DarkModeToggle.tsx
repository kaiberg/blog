'use client'

import {useHasMounted} from "@/hooks/useHasMounted";
import {useDarkMode} from "@/hooks/useDarkMode";
import {colorModes, Themes} from "@/ui/components/DarkModeProvider";

function DarkModeToggle() {
    const mounted = useHasMounted()

    if(!mounted)
        return null;

    return (
        <NotNull/>
    )
 }

 const {light, dark} = colorModes

function NotNull() {
    const {value, setValue} = useDarkMode();
    const opposite : Themes = value === light ? dark : light

    return (
        <button onClick={() => {
            setValue(opposite);
        }}>{opposite}</button>
    )
}

export default DarkModeToggle;