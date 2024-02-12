import {MDXRemoteProps} from "next-mdx-remote/rsc";
import CodeBlock from "@/ui/components/CodeBlock";

const components : MDXRemoteProps['components'] = {
    pre: CodeBlock
}

export default components;