import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Header from "./Header"
import "./layout.scss"

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
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0
                }}
            >
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </div>
        </>
    )
}

export default Layout
