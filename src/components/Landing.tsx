import clsx from "clsx"
import React, { FC } from "react"
import "./Landing.scss"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

type Props = {
    fullHeight?: boolean
}

const Landing: FC<Props> = props => {
    const data = useStaticQuery(graphql`
        query {
            linesBlack: file(relativePath: { eq: "linesBlack.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, base64Width: 100, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const image = data.linesBlack.childImageSharp.fluid

    console.log(image)

    return (
        <BackgroundImage
            Tag="div"
            fluid={image}            
            backgroundColor={`#040507`}
            className={clsx("landing-component", {
                "d-flex flex-column align-items-center justify-content-center landing-component-full-height":
                    props.fullHeight
            })}
        >
            {!props.fullHeight && (
                <div className="header-placeholder">&nbsp;</div>
            )}
            {props.children}
        </BackgroundImage>
    )
}

export default Landing
