import React, { FC, AnchorHTMLAttributes } from "react"

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">

const ExternalLink: FC<Props> = ({ children, ...restProps }) => (
    <a target="_blank" rel="noopener noreferrer" {...restProps}>
        {children}
    </a>
)

export default ExternalLink
