import React, { FC } from "react"
import Image from "../components/Image"
import "./Portrait.scss"

type Props = {}

const Portrait: FC<Props> = () => {
    return (
        <div className="portrait-component mr-0 mr-md-5">
            <Image imageName="portrait" />
        </div>
    )
}

export default Portrait
