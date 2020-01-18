import React, { FC } from "react"
import clsx from "clsx"

type Props = {
    className?: string
}

const SectionHeading: FC<Props> = ({children, className}) => {
    return (
        <div className={clsx("text-center mt-5 mb-4 mb-1", className)}>
            <h1 className="font-gradient d-inline-block">
                {children}
            </h1>
        </div>
    )
}

export default SectionHeading
