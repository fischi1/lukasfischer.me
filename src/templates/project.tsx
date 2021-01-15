import { graphql } from "gatsby"
import React, { FC } from "react"
import { Container } from "react-bootstrap"
import { ProjectTemplateQuery } from "../../types/graphql-types"
import BackButton from "../components/button/BackButton"
import Landing from "../components/landing/Landing"
import Layout from "../components/layout/Layout"
import ProjectLanding from "../components/projectLanding/ProjectLanding"
import SEO from "../components/seo/SEO"

type Props = {
    data: ProjectTemplateQuery
}

const ProjectTemplate: FC<Props> = (props) => {
    const frontmatter = props.data.markdownRemark?.frontmatter
    const htmlAst = props.data.markdownRemark?.htmlAst
    const excerpt = props.data.markdownRemark?.excerpt
    const thumbnailImage =
        props.data.markdownRemark?.frontmatter?.thumbnail?.childImageSharp
            ?.fluid?.src
    const slug = props.data.markdownRemark?.fields?.slug

    const title = frontmatter?.title ?? "Title missing"

    let imgArray = null

    if (frontmatter?.images)
        imgArray = frontmatter?.images?.map(
            (img) => img?.childImageSharp?.fluid
        ) as any

    return (
        <Layout>
            <SEO
                title={title}
                description={excerpt}
                image={thumbnailImage}
                slug={slug}
            />
            <Landing>
                <ProjectLanding frontmatter={frontmatter} />
            </Landing>
            <Container className="pt-5">
                {/* {projectAstCompiler(htmlAst)} */}
                <p>Hello world</p>
                <div className="my-3 mt-5">
                    <BackButton />
                </div>
            </Container>
            {/* {imgArray && <ProjectGallery images={imgArray} />} */}
        </Layout>
    )
}

export default ProjectTemplate

export const query = graphql`
    query ProjectTemplate($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            excerpt(pruneLength: 300)
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
                thumbnail {
                    childImageSharp {
                        fluid(maxWidth: 1920, quality: 90) {
                            ...GatsbyImageSharpFluid
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
            fields {
                slug
            }
        }
    }
`
