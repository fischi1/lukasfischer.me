import clsx from "clsx"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import AspectRatioDiv from "./AspectRatioDiv"
import ButtonLink from "./ButtonLink"
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

const ProjectDetail: FC<Props> = props => (
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
                <Link
                    to={props.slug}
                    aria-label={`Read more about "${props.title}"`}
                >
                    <AspectRatioDiv ratio={2 / 3}>
                        <BackgroundImage
                            role="img"
                            alt={props.title}
                            Tag="div"
                            fluid={props.fluidImage}
                            backgroundColor={`#040507`}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </AspectRatioDiv>
                </Link>
            </div>
            <div className="project-spacer">&nbsp;</div>
            <div
                className={clsx(
                    "project-content d-flex align-items-center text-center text-md-left",
                    { "text-md-right flex-row-reverse": props.flipped }
                )}
            >
                <div className="w-100">
                    <h2 className="h3">{props.title}</h2>
                    <p className="mb-2 mb-md-5">{props.short}</p>
                    <div>
                        {props.demo && (
                            <ButtonLink
                                external
                                className="mr-3"
                                to={props.demo}
                            >
                                Demo
                            </ButtonLink>
                        )}
                        <ButtonLink to={props.slug}>More ...</ButtonLink>
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

export default ProjectDetail
