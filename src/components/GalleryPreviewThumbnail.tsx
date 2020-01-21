import React, { FC } from "react"
import "./GalleryPreviewThumbnail.scss"
import AspectRatioDiv from "./AspectRatioDiv"

type Props = {
    src: string
}

const GalleryPreviewThumbnail: FC<Props> = props => {
    return (
        <AspectRatioDiv ratio={2 / 3} style={{ background: `url("${props.src}") no-repeat center center`, backgroundSize: "cover" }}>
        </AspectRatioDiv>
    )
}

export default GalleryPreviewThumbnail
