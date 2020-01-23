import clsx from "clsx"
import React, { FC } from "react"
import AspectRatioDiv from "./AspectRatioDiv"
import ButtonLink from "./ButtonLink"
import "./ProjectDetail.scss"
import ProjectDivider from "./ProjectDivider"

type Props = {
    flipped?: boolean
    last?: boolean
}

const ProjectDetail: FC<Props> = props => {
    return (
        <>
            <div
                className={clsx(
                    "project-detail my-3 d-flex flex-column flex-md-row",
                    {
                        "flex-md-row-reverse": props.flipped
                    }
                )}
            >
                <div className="project-image">
                    <AspectRatioDiv
                        ratio={2 / 3}
                        style={{
                            background:
                                'url("https://lukasfischer.me/assets/images/inifiniteboardsoverview.jpg") no-repeat center center',
                            backgroundSize: "contain"
                        }}
                    >
                        &nbsp;
                    </AspectRatioDiv>
                </div>
                <div className="project-spacer">&nbsp;</div>
                <div
                    className={clsx(
                        "project-content d-flex align-items-center text-center text-md-left",
                        { "text-md-right flex-row-reverse": props.flipped }
                    )}
                >
                    <div className="w-100">
                        <h2 className="h3">Inifinite Boards</h2>
                        <p className="mb-2 mb-md-5">
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                            amet
                        </p>
                        <div>
                            <ButtonLink className="mr-3" to="/infinite-boards/">
                                Demo
                            </ButtonLink>
                            <ButtonLink to="/page-2/">More ...</ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
            {!props.last && (
                <div className="text-center">
                    <ProjectDivider className="my-5" />
                </div>
            )}
        </>
    )
}

export default ProjectDetail
