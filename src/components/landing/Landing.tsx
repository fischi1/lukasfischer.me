import clsx from "clsx"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React, { FC } from "react"
import HeaderPlaceholder from "./HeaderPlaceholder"
import "./Landing.scss"

type Props = {
    fullHeight?: boolean
}

const Landing: FC<Props> = ({ fullHeight, children }) => {
    const data = useStaticQuery(graphql`
        query {
            linesBlack: file(relativePath: { eq: "images/linesBlack.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, base64Width: 100, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const image = data.linesBlack.childImageSharp.fluid

    return (
        <BackgroundImage
            fluid={image}
            Tag="div"
            className={clsx("landing-component", {
                "d-flex flex-column align-items-center justify-content-center landing-component-full-height": fullHeight
            })}
        >
            {!fullHeight && <HeaderPlaceholder />}
            {children}
        </BackgroundImage>
    )
}

export default Landing
