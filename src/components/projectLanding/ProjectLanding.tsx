import GatsbyImage, { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import { Container } from "react-bootstrap"
import { ProjectTemplateQuery } from "../../../types/graphql-types"
import VideoIframe from "../videoIFrame/VideoIframe"

type Markdown = NonNullable<ProjectTemplateQuery["markdownRemark"]>

type Props = {
    frontmatter: Markdown["frontmatter"] | null | undefined
}

const ProjectLanding: FC<Props> = ({ frontmatter }) => {
    const video = frontmatter?.landing?.video
    const image = frontmatter?.landing?.image?.childImageSharp?.fluid as
        | FluidObject
        | undefined

    const title = frontmatter?.title ?? "title missing"

    return (
        <Container>
            <div className="text-center">
                <h1 className="font-gradient my-5 d-inline-block">{title}</h1>
            </div>
            {video && (
                <VideoIframe
                    className="pb-5"
                    src={frontmatter?.landing?.video ?? ""}
                />
            )}
            {image && (
                <div className="pb-5">
                    <GatsbyImage fluid={image} />
                </div>
            )}
        </Container>
    )
}

export default ProjectLanding
