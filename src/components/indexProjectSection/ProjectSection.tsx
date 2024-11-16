import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import { ProjectSectionQuery } from "../../../types/graphql-types"
import ProjectContainer from "./ProjectContainer"
import ProjectDetail from "./ProjectDetail"

type Props = {}

const ProjectSection: FC<Props> = () => {
    const data = useStaticQuery(graphql`
        query ProjectSection {
            allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { glob: "**/data/projects/**/*.md" }
                }
            ) {
                nodes {
                    frontmatter {
                        title
                        short
                        demo
                        noun
                        order
                        thumbnail {
                            childImageSharp {
                                fluid(
                                    maxWidth: 510
                                    maxHeight: 340
                                    quality: 90
                                    base64Width: 50
                                    cropFocus: CENTER
                                ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                            publicURL
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `) as ProjectSectionQuery

    const projects = data.allMarkdownRemark.nodes.sort((a, b) => {
        const numA = a.frontmatter?.order ?? 99999
        const numB = b.frontmatter?.order ?? 99999

        if (numA < numB) return -1
        if (numA > numB) return 1
        return 0
    })

    return (
        <ProjectContainer>
            {projects.map((proj, i) => {
                const thumbnailFluidImage = proj.frontmatter?.thumbnail
                    ?.childImageSharp?.fluid as FluidObject | undefined

                /**
                 * Falling back to `publicURL` if the FluidImage isn't available.
                 * This is done so that a gif/avif thumbnail also works
                 */
                const thumnailRaw = !thumbnailFluidImage
                    ? proj.frontmatter?.thumbnail?.publicURL!
                    : ""

                return (
                    <ProjectDetail
                        key={proj.fields?.slug ?? "Slug missing"}
                        title={proj.frontmatter?.title ?? "Title missing"}
                        short={proj.frontmatter?.short ?? "Short missing"}
                        slug={proj.fields?.slug ?? "Slug missing"}
                        demo={proj.frontmatter?.demo}
                        noun={proj.frontmatter?.noun ?? "Noun missing"}
                        thumbnailFluidImage={thumbnailFluidImage}
                        thumbnailRaw={thumnailRaw}
                        flipped={i % 2 === 1}
                        last={i === projects.length - 1}
                    />
                )
            })}
        </ProjectContainer>
    )
}

export default ProjectSection
