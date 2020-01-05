import { graphql, Link } from "gatsby"
import React, { FC } from "react"
import Image from "../components/image"
import Landing from "../components/Landing"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Props = {
    data: any
}

const IndexPage: FC<Props> = ({ data }) => {
    return (
        <Layout>
            <Landing />
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <p>
                <i>{data.site.siteMetadata.description}</i>
            </p>
            {[...Array(10).keys()].map(i => (
                <p key={i}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas rhoncus auctor tempor. Aliquam et dolor ultrices purus
                    posuere convallis. Mauris accumsan dolor id felis malesuada
                    pulvinar. Cras congue, ligula eget tristique semper, augue
                    lectus maximus turpis, at interdum nibh neque nec tortor.
                    Phasellus non vestibulum nisi. Morbi venenatis iaculis mauris,
                    quis hendrerit odio iaculis vitae. Quisque at porta tortor.
                    Proin venenatis elit tellus, sed iaculis leo bibendum a.
                </p>
            ))}
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
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
