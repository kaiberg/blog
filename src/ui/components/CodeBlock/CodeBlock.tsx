import React from "react";
import {Code} from "bright";

export type CodeBlockProps = any & {
    children: React.ReactNode
}

function CodeBlock({children, ...props}: CodeBlockProps) {
    return (
        <Code {...props}>
            {children}
        </Code>
    )
}

export default CodeBlock
