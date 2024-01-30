'use server'

import {cookies} from "next/headers";
import {DarkModeVar, Themes} from "@/app/DarkModeProvider/DarkModeProvider";

const cookieName : DarkModeVar = 'color-mode'

export async function SetDarkModeCookie(value: Themes){
    'use server'
    const expires = Date.now() + 1000 * 24 * 60 * 60 * 1000;
    cookies().set(cookieName, value, {expires});
}
