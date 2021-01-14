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

const ButtonLink: FC<Props> = (props) => {
    const className = clsx("btn btn-primary btn-gradient", props.className)

    if (props.external)
        return (
            <ExternalLink className={className} href={props.to}>
                {props.children}
            </ExternalLink>
        )

    return (
        <Link className={className} to={props.to}>
            {props.children}
        </Link>
    )
}

export default ButtonLink
