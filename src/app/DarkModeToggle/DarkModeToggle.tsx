'use client'

import {useHasMounted} from "@/hooks/useHasMounted";
import {useDarkMode} from "@/hooks/useDarkMode";

function DarkModeToggle() {
    const mounted = useHasMounted()

    if(!mounted)
        return null;

    return (
        <NotNull/>
    )
 }

function NotNull() {
    const {value, setValue} = useDarkMode()
    const opposite = value === 'light' ? 'dark' : 'light'

    return (
        <button onClick={() => {
            setValue(opposite);
        }}>{opposite}</button>
    )
}

export default DarkModeToggle;