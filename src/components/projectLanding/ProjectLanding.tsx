import BackgroundImage from "gatsby-background-image"
import { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import { Container } from "react-bootstrap"
import { ProjectTemplateQuery } from "../../../types/graphql-types"
import AspectRatioDiv from "../aspectRationDiv/AspectRatioDiv"
import VideoIframe from "../videoIFrame/VideoIframe"

type Markdown = NonNullable<ProjectTemplateQuery["markdownRemark"]>

type Props = {
    frontmatter: Markdown["frontmatter"] | null | undefined
}

const ProjectLanding: FC<Props> = ({ frontmatter }) => {
    const image = frontmatter?.landing?.image?.childImageSharp?.fluid as
        | FluidObject
        | undefined

    const title = frontmatter?.title ?? "title missing"

    return (
        <Container>
            <div className="text-center">
                <h1 className="font-gradient my-5 d-inline-block">{title}</h1>
            </div>
            {frontmatter?.landing?.video && (
                <VideoIframe
                    className="pb-5"
                    src={frontmatter?.landing?.video ?? ""}
                />
            )}
            {image && (
                <div className="pb-5">
                    <AspectRatioDiv>
                        <BackgroundImage
                            role="img"
                            alt={title}
                            Tag="div"
                            fluid={image}
                            backgroundColor={`#040507`}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </AspectRatioDiv>
                </div>
            )}
        </Container>
    )
}

export default ProjectLanding
