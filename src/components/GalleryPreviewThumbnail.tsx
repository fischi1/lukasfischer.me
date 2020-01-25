import Img, { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import "./GalleryPreviewThumbnail.scss"
import AspectRatioDiv from "./AspectRatioDiv"
import BackgroundImage from "gatsby-background-image"

type Props = {
    fluid: FluidObject
    onClick: () => void
}

const GalleryPreviewThumbnail: FC<Props> = props => (
    <div
        className="gallery-preview-thumbnail m-1"
        onClick={props.onClick}
        role="button"
        aria-label="View image"
    >
        <AspectRatioDiv ratio={2 / 3}>
            <BackgroundImage
                Tag="div"
                fluid={props.fluid}
                backgroundColor={`#040507`}
                style={{ width: "100%", height: "100%" }}
            />
        </AspectRatioDiv>
    </div>
)

export default GalleryPreviewThumbnail
