import React, { FC } from "react"
import { Col } from "react-bootstrap"

type Props = {}

const ProjectCard: FC<Props> = props => {
    return (
        <Col xs={12} md={6} xl={4}>
            <div className="card mb-4">
                <img
                    src="https://lukasfischer.me/assets/images/inifiniteboardsoverview.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="https://orf.at">
                        More...
                    </a>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard
