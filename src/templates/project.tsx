import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import { Container } from "react-bootstrap"
import { ProjectTemplateQuery } from "../../types/graphql-types"
import BackButton from "../components/button/BackButton"
import Gallery from "../components/gallery/Gallery"
import Landing from "../components/landing/Landing"
import Layout from "../components/layout/Layout"
import ProjectLanding from "../components/projectLanding/ProjectLanding"
import SEO from "../components/seo/SEO"
import projectAstCompiler from "../functions/projectAstCompiler"

const ProjectTemplate: FC<PageProps<ProjectTemplateQuery>> = ({ data }) => {
    const frontmatter = data.markdownRemark?.frontmatter
    const htmlAst = data.markdownRemark?.htmlAst
    const excerpt = data.markdownRemark?.excerpt
    /**
     * Falling back to `publicURL` if the FluidImage isn't available.
     * This is done so that a gif/avif thumbnail also works
     */
    const seoThumbnailImage =
        data.markdownRemark?.frontmatter?.thumbnail?.childImageSharp?.fluid
            ?.src ?? data.markdownRemark?.frontmatter?.thumbnail?.publicURL
    const slug = data.markdownRemark?.fields?.slug

    const title = frontmatter?.title ?? "Title missing"

    let imgArray = null

    if (frontmatter?.images && frontmatter?.images.length > 0)
        imgArray = frontmatter?.images?.map(
            (img) => img?.childImageSharp?.fluid
        ) as any

    return (
        <Layout>
            <SEO
                title={title}
                description={excerpt}
                image={seoThumbnailImage}
                slug={slug}
            />
            <Landing>
                <ProjectLanding frontmatter={frontmatter} />
            </Landing>
            <Container className="pt-5">
                {projectAstCompiler(htmlAst)}
                <div className="my-3 mt-5">
                    <BackButton />
                </div>
            </Container>
            {imgArray && <Gallery images={imgArray} />}
        </Layout>
    )
}

const query = graphql`
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
                                maxHeight: 1440
                                quality: 90
                                base64Width: 50
                                cropFocus: CENTER
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
                    publicURL
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

export default ProjectTemplate

export { query }
