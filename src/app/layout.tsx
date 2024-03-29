import type {Metadata} from "next";
import "./reset.css";
import "./font.css"
import * as stylex from "@stylexjs/stylex"
import {colors, darkMode, lightMode} from "../ui/tokens/colors.stylex"
import Header from "../ui/components/Header";
import Footer from "../ui/components/Footer";
import DarkModeProvider from "../ui/components/DarkModeProvider";
import {cookies} from "next/headers";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const dark = 'dark', light = 'light', darkModeVariableName = 'data-color-mode'
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const mode = cookies().get(darkModeVariableName)?.value;

    return (
        <DarkModeProvider>
            <html lang="en" {...stylex.props(rootStyles.showcase, rootStyles.theme, mode === dark && darkMode, mode === light && lightMode)} {...{[darkModeVariableName]: mode}}>
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
            </html>
        </DarkModeProvider>
    );
}

const rootStyles = stylex.create({
    theme: {
        background: colors.background,
        color: colors.text,
        fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";'
    },
    showcase: {
        minHeight: '100dvh',
        minWidth: '100dvw'
    }
})
