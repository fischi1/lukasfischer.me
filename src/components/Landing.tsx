import clsx from "clsx"
import React, { FC } from "react"
import "./Landing.scss"

type Props = {
    fullHeight?: boolean
}

const Landing: FC<Props> = props => (
    <div
        className={clsx("landing-component", {
            "d-flex flex-column align-items-center justify-content-center landing-component-full-height":
                props.fullHeight
        })}
    >
        {!props.fullHeight && <div className="header-placeholder">&nbsp;</div>}
        {props.children}
    </div>
)

export default Landing
