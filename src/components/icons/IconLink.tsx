import React, { FC } from "react"
import "./IconLink.scss"
import MailIcon from "./MailIcon"
import TwitterIcon from "./TwitterIcon"

type Props = {
    type: "twitter" | "mail"
    href: string
}

const IconLink: FC<Props> = ({ type, href }) => {
    return (
        <a className="icon-link" href={href} target="_blank" rel="noopener noreferrer">
            {type === "twitter" && <TwitterIcon />}
            {type === "mail" && <MailIcon />}
        </a>
    )
}

export default IconLink
