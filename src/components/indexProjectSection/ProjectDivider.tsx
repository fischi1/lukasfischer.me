import React, { FC } from "react"
import "./ProjectDivider.scss"
import clsx from "clsx"

type Props = {
    className?: string
}

const ProjectDivider: FC<Props> = ({ className }) => {
    return <div className={clsx("project-divider", className)} />
}

export default ProjectDivider
