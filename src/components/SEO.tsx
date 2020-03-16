import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Helmet from "react-helmet"
import { SeoQuery } from "../../types/graphql-types"

type Props = {
    description?: string | null
    lang?: string
    meta?: Array<{ name: string; content: string }>
    slug?: string | null
    image?: string | null
    title: string
}

const SEO: FC<Props> = ({
    description = "",
    lang = "en",
    meta = [],
    slug = "",
    image = "",
    title
}) => {
    // fluid(quality: 90, fit: COVER, maxHeight: 1005, maxWidth: 1920) {
    const { site, ogImage } = useStaticQuery(
        graphql`
            query SEO {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        origin
                    }
                }
                ogImage: file(relativePath: { eq: "images/linesBlack.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    ) as SeoQuery

    const metaDescription = description || site?.siteMetadata?.description
    const metaAuthor = site?.siteMetadata?.author
    const metaTitle = site?.siteMetadata?.title
    const origin =
        process.env.NODE_ENV === "development"
            ? location.origin
            : site?.siteMetadata?.origin
    const metaImage = image || ogImage?.childImageSharp?.fluid?.src
    const metaSlug = slug ?? ""

    if (!metaDescription || !metaAuthor || !metaTitle || !metaImage) {
        console.error(
            "content for meta tag missing",
            metaDescription,
            metaAuthor,
            metaTitle,
            origin,
            metaImage
        )
        return null
    }

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    property: `og:site_name`,
                    content: metaTitle
                },
                {
                    property: `og:url`,
                    content: origin + metaSlug
                },
                {
                    property: `og:image`,
                    content: origin + metaImage
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`
                },
                {
                    name: `twitter:creator`,
                    content: metaAuthor
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                }
            ].concat(meta)}
        />
    )
}

export default SEO
