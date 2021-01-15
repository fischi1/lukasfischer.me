import clsx from "clsx"
import React, { FC, MouseEvent } from "react"
import "./Button.scss"

type Props = {
    className?: string
    onClick?: (e: MouseEvent) => void
}

const Button: FC<Props> = (props) => (
    <button
        className={clsx("btn btn-primary btn-gradient", props.className)}
        type="button"
        onClick={props.onClick}
    >
        {props.children}
    </button>
)

export default Button
