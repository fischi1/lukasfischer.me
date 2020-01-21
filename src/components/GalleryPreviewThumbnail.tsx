import React, { FC } from "react"
import "./GalleryPreviewThumbnail.scss"
import AspectRatioDiv from "./AspectRatioDiv"

type Props = {
    src: string
    onClick: () => void
}

const GalleryPreviewThumbnail: FC<Props> = props => {
    return (
        <div
            className="gallery-preview-thumbnail m-1"
            onClick={props.onClick}
            role="button"
            aria-label="View image"
        >
            <AspectRatioDiv
                ratio={2 / 3}
                style={{
                    background: `url("${props.src}") no-repeat center center`,
                    backgroundSize: "cover"
                }}
            ></AspectRatioDiv>
        </div>
    )
}

export default GalleryPreviewThumbnail
