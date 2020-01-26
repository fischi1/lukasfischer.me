import clsx from "clsx"
import { Link } from "gatsby"
import React, { FC } from "react"
import "./Button.scss"

type Props = {
    className?: string
    to: string
    external?: boolean
}

const ButtonLink: FC<Props> = props => {
    const className = clsx("btn btn-primary btn-gradient", props.className)

    if (props.external)
        return (
            <a
                className={className}
                href={props.to}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.children}
            </a>
        )

    return (
        <Link className={className} to={props.to}>
            {props.children}
        </Link>
    )
}

export default ButtonLink
