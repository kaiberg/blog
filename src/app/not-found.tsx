import Link from "next/link";
import * as stylex from "@stylexjs/stylex"
import MaxWidthWrapperStylex from "@/ui/utilityClasses/maxWidthWrapper";
import Game from "@/ui/components/15Puzzle";

function NotFound() {
    return (
        <div {...stylex.props(MaxWidthWrapperStylex)}>
            <h1>Not Found!</h1>
            <p>This page could not be found</p>
            <Link href={'/'}>Go back home</Link>

            <div>
                <h2>Or play a quick game</h2>
                <Game/>
            </div>
        </div>
    )
}

export default NotFound;