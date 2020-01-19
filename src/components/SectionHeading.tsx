import clsx from "clsx"
import React, { FC } from "react"

type Props = {
    className?: string
}

const SectionHeading: FC<Props> = ({ children, className }) => (
    <div className={clsx("text-center mt-5 mb-4 mb-1", className)}>
        <h2 className="h1 font-gradient d-inline-block">{children}</h2>
    </div>
)

export default SectionHeading
