import Image from "next/image";
import * as stylex from "@stylexjs/stylex"
import {media, PHONE} from "../ui/tokens/device.breakpoints.stylex"

export default function Home() {
  return (
    <main {...stylex.props(styles.base)}>
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