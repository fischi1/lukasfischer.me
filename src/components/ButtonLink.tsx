import clsx from "clsx"
import { Link } from "gatsby"
import React, { FC } from "react"
import "./Button.scss"

type Props = {
    className?: string
    to: string
}

const ButtonLink: FC<Props> = props => (
    <Link
        className={clsx("btn btn-primary btn-gradient", props.className)}
        to={props.to}
    >
        {props.children}
    </Link>
)

export default ButtonLink
