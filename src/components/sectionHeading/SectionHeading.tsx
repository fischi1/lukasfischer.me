import clsx from "clsx"
import React, { FC } from "react"

type Props = {
    className?: string
    headingClassName?: string
}

const SectionHeading: FC<Props> = ({
    children,
    className,
    headingClassName
}) => (
    <div className={clsx("text-center mt-5 mb-4 mb-1", className)}>
        <h2 className={clsx("font-gradient d-inline-block", headingClassName)}>
            {children}
        </h2>
    </div>
)

export default SectionHeading
