import React from "react"
import HeaderPlaceholder from "../components/HeaderPlaceholder"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <HeaderPlaceholder />
        <div className="container mt-3">
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    </Layout>
)

export default NotFoundPage
