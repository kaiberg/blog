import * as stylex from "@stylexjs/stylex"
import {colors} from "../../ui/tokens/colors.stylex";
import Link from "next/link";
import maxWidthWrapperStylex from "@/ui/utilityClasses/maxWidthWrapper";
import Logo from "@/app/Logo";

type FooterProps = {}

function Footer({}: FooterProps) {
    return (
        <header {...stylex.props(styles.wrapper, maxWidthWrapperStylex)}>
            <Logo/>

            <div {...stylex.props(styles.items)}>
                <Link href={'mailto:kaibdelay@riseup.net'}>
                    Contact
                </Link>
            </div>
        </header>
    )
}

const styles = stylex.create({
    wrapper: {
        paddingBlockStart: '1rem',
        minHeight: '4rem',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
})




export default Footer;