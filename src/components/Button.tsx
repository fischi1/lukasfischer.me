import React, { FC, MouseEvent } from "react"
import "./Button.scss"
import clsx from "clsx"

type Props = {
    className?: string
    onClick?: () => void
}

const Button: FC<Props> = props => {
    return (
        <button className={clsx("btn btn-primary", props.className)} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button
