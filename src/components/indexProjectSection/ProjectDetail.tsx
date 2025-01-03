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
    noun?: string
    slug: string
    thumbnailFluidImage?: FluidObject
    thumbnailRaw?: string
    flipped?: boolean
    last?: boolean
}

const ProjectDetail: FC<Props> = ({
    title,
    short,
    demo,
    noun,
    slug,
    thumbnailFluidImage,
    thumbnailRaw,
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
                        {thumbnailFluidImage && (
                            <GatsbyImage
                                fluid={thumbnailFluidImage}
                                alt={title}
                            />
                        )}
                        {thumbnailRaw && (
                            <img
                                src={thumbnailRaw}
                                alt={title}
                                width="100%"
                                height="100%"
                                style={{ objectFit: "cover" }}
                            />
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
                                Go to {noun}
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
