import * as stylex from "@stylexjs/stylex"
import {pixelsToRem} from "@/helpers/converter/pixelsToRem";
import { PHONE, media } from "../../tokens/device.breakpoints.stylex"

const spacing = 16;

const maxWidthWrapper = stylex.create({
    wrapper: {
        maxWidth: '1100px',
        marginInlineStart: 'auto',
        marginInlineEnd: 'auto',
        // paddingInlineStart: { default: `${spacing}px`, [media.DARK]: `${spacing * 2}px`},
        // paddingInlineEnd: { default: `${spacing}px`, [media.DARK]: `${spacing * 2}px`},
    }
})

export default maxWidthWrapper.wrapper;