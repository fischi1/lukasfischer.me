import React, { FC } from "react"
import { Container } from "react-bootstrap"
import Landing from "../components/Landing"
import LandingContentIndex from "../components/LandingContentIndex"
import Layout from "../components/Layout"
import Portrait from "../components/Portrait"
import ProjectSection from "../components/ProjectSection"
import SectionHeading from "../components/SectionHeading"
import SEO from "../components/Seo"

type Props = {}

const IndexPage: FC<Props> = props => (
    <Layout>
        <Landing fullHeight>
            <LandingContentIndex />
        </Landing>
        <SEO title="Home" />
        <Container>
            <SectionHeading displayAsH1>About me</SectionHeading>

            <Portrait />

            <p>
                I currently live in Vienna, Austria. My interest in coding and
                software development started very early with the age of 12,
                thanks to my fascination in video games. Shortly after that I
                started to teach myself HTML and CSS. This also led me to choose
                a technical school career.
            </p>

            <p>
                I’m interested in front-end, back-end, web and app development,
                UX design, video game dev and computer graphics. This also lead
                to the topics of my matriculation project and bachelor thesis.
            </p>

            <div className="clearfix">&nbsp;</div>

            <SectionHeading displayAsH1>Projects</SectionHeading>

            <ProjectSection />
        </Container>
    </Layout>
)

export default IndexPage
