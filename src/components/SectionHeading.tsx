import clsx from "clsx"
import React, { FC } from "react"

type Props = {
    className?: string
    displayAsH1?: boolean
}

const SectionHeading: FC<Props> = ({ children, className, displayAsH1 }) => (
    <div className={clsx("text-center mt-5 mb-4 mb-1", className)}>
        <h2
            className={clsx("font-gradient d-inline-block", {
                h1: displayAsH1
            })}
        >
            {children}
        </h2>
    </div>
)

export default SectionHeading
