import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import { ProjectSectionQuery } from "../../../types/graphql-types"
import ProjectContainer from "./ProjectContainer"
import ProjectDetail from "./ProjectDetail"

type Props = {}

const ProjectSection: FC<Props> = (props) => {
    const data = useStaticQuery(graphql`
        query ProjectSection {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        title
                        short
                        demo
                        order
                        thumbnail {
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

    const projects = data.allMarkdownRemark.nodes.sort((a, b) => {
        const numA = a.frontmatter?.order ?? 99999
        const numB = b.frontmatter?.order ?? 99999

        if (numA < numB) return -1
        if (numA > numB) return 1
        return 0
    })

    return (
        <ProjectContainer>
            {projects.map((proj, i) => (
                <ProjectDetail
                    key={proj.fields?.slug ?? "Slug missing"}
                    title={proj.frontmatter?.title ?? "Title missing"}
                    short={proj.frontmatter?.short ?? "Short missing"}
                    slug={proj.fields?.slug ?? "Slug missing"}
                    demo={proj.frontmatter?.demo}
                    fluidImage={
                        proj.frontmatter?.thumbnail !== null
                            ? (proj.frontmatter?.thumbnail?.childImageSharp
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
