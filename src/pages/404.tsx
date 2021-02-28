import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout/Layout"
import HeaderPlaceholder from "../components/landing/HeaderPlaceholder"

const NotFoundPage: FC<PageProps> = () => (
    <Layout>
        <HeaderPlaceholder />
        <h1 className="text-center mt-5 h3">404: Not Found</h1>
        <p className="text-center">
            You just hit a route that doesn&#39;t exist
        </p>
    </Layout>
)

export default NotFoundPage
