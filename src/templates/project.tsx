import { graphql } from "gatsby"
import React, { FC } from "react"
import { Container } from "react-bootstrap"
import { ProjectTemplateQuery } from "../../types/graphql-types"
import BackButtonRow from "../components/BackButtonRow"
import Landing from "../components/Landing"
import Layout from "../components/Layout"
import ProjectGallery from "../components/ProjectGallery"
import ProjectLanding from "../components/ProjectLanding"
import SEO from "../components/Seo"
import projectAstCompiler from "./projectAstCompiler"

type Props = {
    data: ProjectTemplateQuery
}

const ProjectTemplate: FC<Props> = props => {
    const frontmatter = props.data.markdownRemark?.frontmatter
    const htmlAst = props.data.markdownRemark?.htmlAst

    const title = frontmatter?.title ?? "Title missing"

    let imgArray = null

    if (frontmatter?.images)
        imgArray = frontmatter?.images?.map(
            img => img?.childImageSharp?.fluid
        ) as any

    return (
        <Layout>
            <SEO title={title} />
            <Landing>
                <ProjectLanding frontmatter={frontmatter} />
            </Landing>
            <Container className="pt-5">
                {projectAstCompiler(htmlAst)}
                <BackButtonRow className="mt-5" />
            </Container>
            {imgArray && <ProjectGallery images={imgArray} />}
        </Layout>
    )
}

export default ProjectTemplate

export const query = graphql`
    query ProjectTemplate($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            frontmatter {
                title
                landing {
                    video
                    image {
                        childImageSharp {
                            fluid(
                                maxWidth: 2560
                                quality: 90
                                base64Width: 50
                            ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                images {
                    childImageSharp {
                        fluid(maxWidth: 2560, quality: 90, base64Width: 50) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`
