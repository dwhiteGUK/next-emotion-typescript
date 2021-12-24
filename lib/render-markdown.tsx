import { ReactNode } from 'react';
import Markdown from 'markdown-to-jsx';

const options = {
    overrides: {
        h1: ({ children, ...rest }: { children: ReactNode }) => <h2 {...rest}>{children}</h2>,
    },
}

export function RenderMarkdown({ children = '', ...props }) {
    return (
        <Markdown options={{ options, ...props.options }} {...props}>
            {children}
        </Markdown>
    )
}
