import React, { cloneElement } from 'react'

function ProviderComposer({ contexts, children }: any) {
    return contexts.reduce(
        (kids: any, parent: React.DetailedReactHTMLElement<{ children: any }, HTMLElement>) =>
            cloneElement(parent, {
                children: kids
            }),
        children
    )
}
export default function ContextProvider({ children }: any) {
    return (
        <ProviderComposer
            // add providers to array of contexts
            contexts={[
                
            ]}
        >
            {children}
        </ProviderComposer>
    )
}
