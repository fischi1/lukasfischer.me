import React, { FC, CSSProperties } from "react"
import "./AspectRatioDiv.scss"

type Props = {
    ratio?: number
    style?: CSSProperties
    id?: string
    className?: string
}

const AspectRatioDiv: FC<Props> = ({
    ratio = 9 / 16,
    children,
    style,
    id,
    className
}) => {
    return (
        <div
            className="aspect-ratio-div"
            style={{ paddingBottom: `${ratio * 100}%` }}
        >
            <div style={style} id={id} className={className}>
                {children}
            </div>
        </div>
    )
}

export default AspectRatioDiv
