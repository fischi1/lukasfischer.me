import React, { FC } from "react"
import { Container } from "react-bootstrap"
import Landing from "../components/Landing"
import LandingContentIndex from "../components/LandingContentIndex"
import Layout from "../components/Layout"
import Portrait from "../components/Portrait"
import ProjectSection from "../components/ProjectSection"
import SectionHeading from "../components/SectionHeading"
import SEO from "../components/SEO"

type Props = {}

const IndexPage: FC<Props> = props => (
    <Layout>
        <Landing fullHeight>
            <LandingContentIndex />
        </Landing>
        <SEO title="Lukas Fischer" />
        <Container>
            <SectionHeading displayAsH1>About me</SectionHeading>

            <Portrait />

            <p>
                <b>Welcome!</b>
                <br />
                I'm Lukas from Vienna, Austria! A software engineer who
                understands the importance of UX. Always learning, always
                improving...
            </p>

            <p>
                My interest in coding and software development started very
                early, thanks to my fascination in computers and video games.
                Shortly after that I started to teach myself HTML and CSS.
                Everything went hand in hand and led me to choose a technical
                school career.
            </p>

            <p>
                I'm interested in a wide range of topics including front-end,
                back-end, web and app development, UX design, video game dev and
                computer graphics.
            </p>

            <div className="clearfix">&nbsp;</div>

            <SectionHeading displayAsH1>Projects</SectionHeading>

            <ProjectSection />
        </Container>
    </Layout>
)

export default IndexPage
