import BackgroundImage from "gatsby-background-image"
import { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import AspectRatioDiv from "../aspectRationDiv/AspectRatioDiv"
import "./GalleryThumbnail.scss"

type Props = {
    index: number
    fluid: FluidObject
    onClick: () => void
}

const GalleryThumbnail: FC<Props> = ({ index, fluid, onClick }) => (
    <div
        className="gallery-thumbnail m-1"
        onClick={onClick}
        role="button"
        aria-label="View image"
    >
        <AspectRatioDiv ratio={2 / 3}>
            <BackgroundImage
                Tag="div"
                className="thumbnail-image"
                fluid={fluid}
                role="button"
                aria-label={`Open gallery image #${index + 1}`}
            />
        </AspectRatioDiv>
    </div>
)

export default GalleryThumbnail
