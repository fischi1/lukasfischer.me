import BackgroundImage from "gatsby-background-image"
import { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import AspectRatioDiv from "../aspectRationDiv/AspectRatioDiv"
import "./GalleryThumbnail.scss"

type Props = {
    fluid: FluidObject
    onClick: () => void
}

const GalleryThumbnail: FC<Props> = (props) => (
    <div
        className="gallery-thumbnail m-1"
        onClick={props.onClick}
        role="button"
        aria-label="View image"
    >
        <AspectRatioDiv ratio={2 / 3}>
            <BackgroundImage
                Tag="div"
                fluid={props.fluid}
                backgroundColor="#040507"
                style={{ width: "100%", height: "100%" }}
            />
        </AspectRatioDiv>
    </div>
)

export default GalleryThumbnail
