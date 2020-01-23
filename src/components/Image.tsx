import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type Props = {
    imageName: "gatsbyAstronaut" | "portrait"
}

export const squareImage = graphql`
    fragment squareImage on File {
        childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const Image: FC<Props> = ({ imageName }) => {
    const data = useStaticQuery(graphql`
        query {
            gatsbyAstronaut: file(relativePath: { eq: "images/gatsby-astronaut.png" }) {
                ...squareImage
            }
            portrait: file(relativePath: { eq: "images/fischi.png" }) {
                ...squareImage
            }
        }
    `)

    switch(imageName) {
        case "gatsbyAstronaut":
            return <Img fluid={data.gatsbyAstronaut.childImageSharp.fluid} />;
        case "portrait":
            return <Img fluid={data.portrait.childImageSharp.fluid}/>;
    }
}

export default Image
