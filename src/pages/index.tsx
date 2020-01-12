import { graphql, Link } from "gatsby"
import React, { FC } from "react"
import Image from "../components/Image"
import Landing from "../components/Landing"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Container, Row, Col } from "react-bootstrap"
import Portrait from "../components/Portrait"
import "../scss/main.scss"
import SectionHeading from "../components/SectionHeading"
import ProjectCard from "../components/ProjectCard"

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

                <Row>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </Row>

                <br />
                <br />
                <br />
                <Link to="/page-2/">Go to page 2</Link>
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
