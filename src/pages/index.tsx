import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import { Container } from "react-bootstrap"
import { IndexQuery } from "../../types/graphql-types"
import ProjectSection from "../components/indexProjectSection/ProjectSection"
import Landing from "../components/landing/Landing"
import LandingContentIndex from "../components/landing/LandingContentIndex"
import Layout from "../components/layout/Layout"
import Portrait from "../components/portrait/Portrait"
import SectionHeading from "../components/sectionHeading/SectionHeading"
import SEO from "../components/seo/SEO"
import projectAstCompiler from "../functions/projectAstCompiler"

const IndexPage: FC<PageProps<IndexQuery>> = ({ data }) => {
    const aboutMeAst = data.file?.childMarkdownRemark?.htmlAst

    return (
        <Layout>
            <SEO title="Lukas Fischer" />
            <Landing fullHeight>
                <LandingContentIndex />
            </Landing>
            <Container>
                <SectionHeading headingClassName="h1">About me</SectionHeading>

                <Portrait />

                {projectAstCompiler(aboutMeAst)}

                <div className="clearfix">&nbsp;</div>

                <SectionHeading headingClassName="h1">Projects</SectionHeading>

                <ProjectSection />
            </Container>
        </Layout>
    )
}

const query = graphql`
    query Index {
        file(relativePath: { eq: "data/about-me.md" }) {
            childMarkdownRemark {
                htmlAst
            }
        }
    }
`

export default IndexPage

export { query }
