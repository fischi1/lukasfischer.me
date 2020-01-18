import React, { FC } from "react"
import "./ProjectContainer.scss"

type Props = {}

const ProjectContainer: FC<Props> = props => {
    return (
        <div className="project-container d-flex flex-row justify-content-center">
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default ProjectContainer
