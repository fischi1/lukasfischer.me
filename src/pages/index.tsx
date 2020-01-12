import { graphql, Link } from "gatsby"
import React, { FC } from "react"
import Image from "../components/Image"
import Landing from "../components/Landing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Portrait from "../components/Portrait"
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
                {/* transform into component */}
                <div className=" text-center">
                    <h1 className="font-gradient d-inline-block">Hi people</h1>
                </div>

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
                <hr />

                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <p>
                    <i>{data.site.siteMetadata.description}</i>
                </p>
                {[...Array(10).keys()].map(i => (
                    <p key={i}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas rhoncus auctor tempor. Aliquam et dolor
                        ultrices purus posuere convallis. Mauris accumsan dolor
                        id felis malesuada pulvinar. Cras congue, ligula eget
                        tristique semper, augue lectus maximus turpis, at
                        interdum nibh neque nec tortor. Phasellus non vestibulum
                        nisi. Morbi venenatis iaculis mauris, quis hendrerit
                        odio iaculis vitae. Quisque at porta tortor. Proin
                        venenatis elit tellus, sed iaculis leo bibendum a.
                    </p>
                ))}
                <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                    <Image imageName="gatsbyAstronaut" />
                </div>
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
