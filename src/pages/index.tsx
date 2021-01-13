import { Link, PageProps } from "gatsby"
import React, { FC } from "react"
import SEO from "../components/seo/SEO"

const IndexPage: FC<PageProps> = () => (
    <>
        <SEO title="Hello world"/>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </>
)

export default IndexPage
