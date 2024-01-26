import Image from "next/image";
import * as stylex from "@stylexjs/stylex"

const styles = stylex.create({
    base: {
        fontSize: '1rem',
        color: 'seagreen'
    }
})

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
