import * as stylex from "@stylexjs/stylex"
import {PHONE} from "../ui/tokens/device.breakpoints.stylex"
import MaxWidthWrapperStylex from "@/ui/utilityClasses/maxWidthWrapper";

export default function Home() {
  return (
    <main {...stylex.props(styles.base, MaxWidthWrapperStylex)}>
      <article>
        <h1>
          Placeholder
        </h1>
        <p>this is a paragraph for testing purposes</p>
      </article>
    </main>
  );
}

const styles = stylex.create({
    base: {
        background: {default: 'red', [PHONE]: 'green'}
    }
})