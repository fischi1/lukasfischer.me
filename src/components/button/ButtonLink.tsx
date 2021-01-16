import clsx from "clsx"
import { Link } from "gatsby"
import React, { FC } from "react"
import ExternalLink from "../externalLink/ExternalLink"
import "./Button.scss"

type Props = {
    className?: string
    to: string
    external?: boolean
}

const ButtonLink: FC<Props> = ({ className, external, to, children }) => {
    const buttonClassName = clsx("btn btn-primary btn-gradient", className)

    if (external)
        return (
            <ExternalLink className={buttonClassName} href={to}>
                {children}
            </ExternalLink>
        )

    return (
        <Link className={buttonClassName} to={to}>
            {children}
        </Link>
    )
}

export default ButtonLink
