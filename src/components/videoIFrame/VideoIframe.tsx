import clsx from "clsx"
import React, { FC } from "react"
import AspectRatioDiv from "../aspectRationDiv/AspectRatioDiv"
import "./VideoIframe.scss"

type Props = {
    className?: string
    src?: string
}

const VideoIframe: FC<Props> = (props) => (
    <div className={clsx("video-iframe", props.className)}>
        <AspectRatioDiv className="video-bg-container">
            <iframe src={props.src} frameBorder={0} allowFullScreen></iframe>
        </AspectRatioDiv>
    </div>
)

export default VideoIframe
