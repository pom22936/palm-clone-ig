import React, { cloneElement } from 'react'
import { LikeProvider } from '../../Services/Context/LikeContext'

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
                <LikeProvider />
            ]}
        >
            {children}
        </ProviderComposer>
    )
}
