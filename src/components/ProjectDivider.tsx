import React, { FC } from "react"
import "./ProjectDivider.scss"
import clsx from "clsx"

type Props = {
    className?: string
}

const ProjectDivider: FC<Props> = props => {
    return <div className={clsx("project-divider", props.className)} />
}

export default ProjectDivider
