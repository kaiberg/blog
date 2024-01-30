import * as stylex from "@stylexjs/stylex"
import {colors} from "../../ui/tokens/colors.stylex";
import Link from "next/link";
import maxWidthWrapperStylex from "@/ui/utilityClasses/maxWidthWrapper";
import {PHONE} from "../../ui/tokens/device.breakpoints.stylex";
import Logo from "@/app/Logo";
import DarkModeToggle from "@/app/DarkModeToggle";

type HeaderProps = {}

function Header({}: HeaderProps) {
    return (
        <header {...stylex.props(styles.wrapper, maxWidthWrapperStylex)}>
            <Logo/>

            <div {...stylex.props(styles.linksWrapper)}>
                <Link href={'/articles'}>
                    Articles
                </Link>
                <Link href={'/projects'}>
                    Projects
                </Link>
                <DarkModeToggle/>
            </div>
            <div {...stylex.props(styles.mobileLinksWrapper)}>

            </div>
        </header>
    )
}

const styles = stylex.create({
    wrapper: {
        height: '4rem',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    linksWrapper: {
      display: {default: 'none', [PHONE]: 'flex'},
      gap: '1rem'
    },
    mobileLinksWrapper: {
        display: 'none'
    },
    item: {

    },
    selected: {
        borderBottom: `1px solid ${colors.primary}`
    }
})




export default Header;