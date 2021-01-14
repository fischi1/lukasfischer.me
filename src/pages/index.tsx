import { PageProps } from "gatsby"
import React, { FC } from "react"
import { Container } from "react-bootstrap"
import ProjectSection from "../components/indexProjectSection/ProjectSection"
import Landing from "../components/landing/Landing"
import LandingContentIndex from "../components/landing/LandingContentIndex"
import Layout from "../components/layout/Layout"
import Portrait from "../components/portrait/Portrait"
import SectionHeading from "../components/sectionHeading/SectionHeading"
import SEO from "../components/seo/SEO"

const IndexPage: FC<PageProps> = () => (
    <Layout>
        <SEO title="Lukas Fischer" />
        <Landing fullHeight>
            <LandingContentIndex />
        </Landing>
        <Container>
            <SectionHeading headingClassName="h1">About me</SectionHeading>

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

            <SectionHeading headingClassName="h1">Projects</SectionHeading>

            <ProjectSection />
        </Container>
    </Layout>
)

export default IndexPage
