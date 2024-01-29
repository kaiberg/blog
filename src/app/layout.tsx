import type { Metadata } from "next";
import "./reset.css";
import "./font.css"
import * as stylex from "@stylexjs/stylex"
import {colors} from "../ui/tokens/colors.stylex"
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...stylex.props(rootStyles.theme, rootStyles.showcase)}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

const rootStyles = stylex.create({
  theme: {
    background: colors.background,
    color: colors.text
  },
  showcase: {
    minHeight: '100dvh',
    minWidth: '100dvw'
  }
})
