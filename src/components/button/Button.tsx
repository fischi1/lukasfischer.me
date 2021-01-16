import clsx from "clsx"
import React, { FC, MouseEvent } from "react"
import "./Button.scss"

type Props = {
    className?: string
    onClick?: (e: MouseEvent) => void
}

const Button: FC<Props> = ({ className, onClick, children }) => (
    <button
        className={clsx("btn btn-primary btn-gradient", className)}
        type="button"
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button
