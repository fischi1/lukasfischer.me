import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Header from "./Header"
import useDebugOutline from "../hooks/useDebugOutline"

const Layout: FC<{}> = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    twitterUrl
                    websiteMail
                }
            }
        }
    `)

    useDebugOutline()

    return (
        <>
            <Header
                title={data.site.siteMetadata.title}
                mailHref={"mailto:" + data.site.siteMetadata.websiteMail}
                twitterHref={data.site.siteMetadata.twitterUrl}
            />
            <main>{children}</main>
        </>
    )
}

export default Layout
