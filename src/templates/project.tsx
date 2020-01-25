import { graphql } from "gatsby"
import React, { FC } from "react"
import { Container } from "react-bootstrap"
import { ProjectTemplateQuery } from "../../types/graphql-types"
import BackButtonRow from "../components/BackButtonRow"
import Landing from "../components/Landing"
import Layout from "../components/Layout"
import ProjectGallery from "../components/ProjectGallery"
import SEO from "../components/Seo"
import VideoIframe from "../components/VideoIframe"
import projectAstCompiler from "./projectAstCompiler"

type Props = {
    data: ProjectTemplateQuery
}

const ProjectTemplate: FC<Props> = props => {
    const frontmatter = props.data.markdownRemark?.frontmatter
    const htmlAst = props.data.markdownRemark?.htmlAst

    const title = frontmatter?.title ?? "Title missing"

    return (
        <Layout>
            <SEO title={title} />
            <Landing>
                <Container>
                    <div className="text-center">
                        <h1 className="font-gradient my-5 d-inline-block">
                            {title}
                        </h1>
                    </div>
                    <VideoIframe
                        className="pb-5"
                        src={frontmatter?.landing?.video ?? ""}
                    />
                </Container>
            </Landing>
            <Container className="pt-5">
                {projectAstCompiler(htmlAst)}
                <BackButtonRow className="mt-5" />
            </Container>
            <ProjectGallery
                images={[
                    "https://lukasfischer.me/assets/images/infiniteboards.jpg",
                    "https://lukasfischer.me/assets/images/infiniteboards-4.jpg",
                    "https://lukasfischer.me/assets/images/infiniteboards-1.jpg",
                    "https://lukasfischer.me/assets/images/infiniteboards-2.jpg",
                    "https://lukasfischer.me/assets/images/0.png",
                    "https://lukasfischer.me/assets/images/13.png",
                    "https://lukasfischer.me/assets/images/colorshoot.png",
                    "https://lukasfischer.me/assets/images/14.png"
                ]}
            />
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
                }
            }
        }
    }
`
