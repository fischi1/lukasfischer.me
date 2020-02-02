import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import React, { FC } from "react"
import "./Portrait.scss"

type Props = {}

const Portrait: FC<Props> = () => {
    const data = useStaticQuery(graphql`
        query {
            portrait: file(relativePath: { eq: "images/fischi.png" }) {
                childImageSharp {
                    fluid(maxWidth: 540, quality: 90, base64Width: 50) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <div className="portrait-component mr-0 mr-md-4 mb-3 mb-md-0">
            <GatsbyImage fluid={data.portrait.childImageSharp.fluid} />
        </div>
    )
}

export default Portrait
