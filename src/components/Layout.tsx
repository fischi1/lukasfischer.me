import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Header from "./Header"

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
