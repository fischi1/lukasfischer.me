import clsx from "clsx"
import React, { FC } from "react"
import AspectRatioDiv from "../aspectRationDiv/AspectRatioDiv"
import "./VideoIframe.scss"

type Props = {
    className?: string
    src?: string
}

const VideoIframe: FC<Props> = ({ className, src }) => (
    <div className={clsx("video-iframe", className)}>
        <AspectRatioDiv className="video-bg-container">
            <iframe src={src} frameBorder={0} allowFullScreen></iframe>
        </AspectRatioDiv>
    </div>
)

export default VideoIframe
