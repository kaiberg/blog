import React from "react";
import {DarkModeContext} from "@/app/DarkModeProvider";

export function useDarkMode() {
    const context = React.useContext(DarkModeContext);

    if(context === undefined)
        throw new Error(`useDarkMode expected DarkModeContext to be defined, actual value ${context}`)

    return context;
}