import React, { FC } from "react"
import "./ProjectContainer.scss"

type Props = {}

const ProjectContainer: FC<Props> = ({ children }) => {
    return (
        <div className="project-container d-flex flex-row justify-content-center">
            <div>{children}</div>
        </div>
    )
}

export default ProjectContainer
