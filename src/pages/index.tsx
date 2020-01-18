import { graphql, Link } from "gatsby"
import React, { FC } from "react"
import { Container, Row } from "react-bootstrap"
import ButtonLink from "../components/ButtonLink"
import Landing from "../components/Landing"
import Layout from "../components/Layout"
import Portrait from "../components/Portrait"
import ProjectCard from "../components/ProjectCard"
import SectionHeading from "../components/SectionHeading"
import SEO from "../components/Seo"
import "../scss/main.scss"

type Props = {
    data: any
}

const IndexPage: FC<Props> = ({ data }) => {
    return (
        <Layout>
            <Landing />
            <SEO title="Home" />
            <Container>
                <SectionHeading>About me</SectionHeading>

                <Portrait />

                <p>
                    I currently live in Vienna, Austria. My interest in coding
                    and software development started very early with the age of
                    12, thanks to my fascination in video games. Shortly after
                    that I started to teach myself HTML and CSS. This also led
                    me to choose a technical school career.
                </p>

                <p>
                    I’m interested in front-end, back-end, web and app
                    development, UX design, video game dev and computer
                    graphics. This also lead to the topics of my matriculation
                    project and bachelor thesis.
                </p>

                <div className="clearfix">&nbsp;</div>

                <SectionHeading>Projects</SectionHeading>

                <ButtonLink className="mr-3"  to="/page-2/">
                    More ...
                </ButtonLink>

                <ButtonLink  to="/demo/">
                    Demo
                </ButtonLink>

                <Row className="mt-3">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </Row>

                <br />
                <br />
                <br />

                <ButtonLink to="/page-2/">
                    Go to page 2
                </ButtonLink>
            </Container>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                description
            }
        }
    }
`
