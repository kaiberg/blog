import MaxWidthWrapperStylex from "@/ui/utilityClasses/maxWidthWrapper";
import * as stylex from "@stylexjs/stylex"
import {MDXRemote} from "next-mdx-remote/rsc";
import components from "@/app/[category]/[slug]/components";

type BlogPostProps = {
    params: {
        category: string,
        slug: string
    }
}

const mdxTestContent = `
some **mdx** text, with a code component
\`\`\`js
const a = 5 + 10;
\`\`\`
`;

function BlogPost({params:{category, slug}}: BlogPostProps) {
    return (
        <div {...stylex.props(MaxWidthWrapperStylex)}>
            {category}{' '}{slug}
            <MDXRemote source={mdxTestContent} components={components}/>
        </div>
    )
}

export default BlogPost;