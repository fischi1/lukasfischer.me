import clsx from "clsx"
import React, { FC } from "react"
import "./ButtonLink.scss"
import { Link } from "gatsby"

type Props = {
    className?: string
    to: string
}

const ButtonLink: FC<Props> = props => {
    return (
        <Link
            className={clsx("btn btn-primary btn-gradient ", props.className)}
            to={props.to}
        >
            {props.children}
        </Link>
    )
}

export default ButtonLink
