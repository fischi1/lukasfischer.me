import clsx from "clsx"
import { Link } from "gatsby"
import GatsbyImage, { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import AspectRatioDiv from "../aspectRationDiv/AspectRatioDiv"
import ButtonLink from "../button/ButtonLink"
import "./ProjectDetail.scss"
import ProjectDivider from "./ProjectDivider"

type Props = {
    title: string
    short: string
    demo?: string | null
    slug: string
    fluidImage?: FluidObject
    flipped?: boolean
    last?: boolean
}

const ProjectDetail: FC<Props> = ({
    title,
    short,
    demo,
    slug,
    fluidImage,
    flipped,
    last
}) => (
    <>
        <div
            className={clsx(
                "project-detail my-3 d-flex flex-column flex-md-row",
                {
                    "flex-md-row-reverse": flipped
                }
            )}
        >
            <div className="project-image">
                <Link to={slug}>
                    <AspectRatioDiv ratio={2 / 3}>
                        {fluidImage && (
                            <GatsbyImage fluid={fluidImage} alt={title} />
                        )}
                    </AspectRatioDiv>
                </Link>
            </div>
            <div className="project-spacer">&nbsp;</div>
            <div
                className={clsx(
                    "project-content d-flex align-items-center text-center text-md-left",
                    { "text-md-right flex-row-reverse": flipped }
                )}
            >
                <div className="w-100">
                    <h2 className="h3">{title}</h2>
                    <p className="mb-2 mb-md-5">{short}</p>
                    <div>
                        {demo && (
                            <ButtonLink external className="mr-3" to={demo}>
                                Go to app
                            </ButtonLink>
                        )}
                        <ButtonLink to={slug}>More ...</ButtonLink>
                    </div>
                </div>
            </div>
        </div>
        {!last && (
            <div className="text-center">
                <ProjectDivider className="my-5" />
            </div>
        )}
    </>
)

export default ProjectDetail
