import React, { FC } from "react"
import TargetBlankLink from "../TargetBlankLink"
import "./IconLink.scss"
import MailIcon from "./MailIcon"
import TwitterIcon from "./TwitterIcon"

type Props = {
    type: "twitter" | "mail"
    href: string
}

const IconLink: FC<Props> = ({ type, href }) => {
    return (
        <TargetBlankLink className="icon-link">
            {type === "twitter" && <TwitterIcon />}
            {type === "mail" && <MailIcon />}
        </TargetBlankLink>
    )
}

export default IconLink
