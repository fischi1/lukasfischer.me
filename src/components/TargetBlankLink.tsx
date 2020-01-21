import React, { FC } from "react"

type Props = {
    href?: string
    className?: string
}

const TargetBlankLink: FC<Props> = props => (
    <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={props.className}
    >
        {props.children}
    </a>
)

export default TargetBlankLink
