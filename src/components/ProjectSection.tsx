import React, { FC } from "react"
import ProjectContainer from "./ProjectContainer"
import ProjectDetail from "./ProjectDetail"
import { useStaticQuery, graphql } from "gatsby"
import { ProjectSectionQuery } from "../../types/graphql-types"
import { FluidObject } from "gatsby-image"

type Props = {}

const ProjectSection: FC<Props> = props => {
    const data = useStaticQuery(graphql`
        query ProjectSection {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        title
                        short
                        demo
                        images {
                            childImageSharp {
                                fluid(
                                    maxWidth: 500
                                    quality: 90
                                    base64Width: 50
                                ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `) as ProjectSectionQuery

    const projects = data.allMarkdownRemark.nodes

    return (
        <ProjectContainer>
            {projects.map((proj, i) => (
                <ProjectDetail
                    title={proj.frontmatter?.title ?? "Title missing"}
                    short={proj.frontmatter?.short ?? "Short missing"}
                    slug={proj.fields?.slug ?? "Slug missing"}
                    demo={proj.frontmatter?.demo}
                    fluidImage={
                        proj.frontmatter?.images !== null
                            ? (proj.frontmatter?.images[0]?.childImageSharp
                                  ?.fluid as FluidObject)
                            : undefined
                    }
                    flipped={i % 2 === 1}
                    last={i === projects.length - 1}
                />
            ))}
        </ProjectContainer>
    )
}

export default ProjectSection
