import * as stylex from "@stylexjs/stylex"
import { PHONE } from "../../tokens/device.breakpoints.stylex"

const spacing = 16;

const maxWidthWrapper = stylex.create({
    wrapper: {
        maxWidth: '1100px',
        marginInlineStart: 'auto',
        marginInlineEnd: 'auto',
        paddingInlineStart: { default: `${spacing}px`, [PHONE]: `${spacing * 2}px`},
        paddingInlineEnd: { default: `${spacing}px`, [PHONE]: `${spacing * 2}px`},
    }
})

export default maxWidthWrapper.wrapper;