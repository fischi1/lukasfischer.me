import React, { FC } from "react"
import ExternalLink from "../externalLink/ExternalLink"
import "./IconLink.scss"
import MailIcon from "./MailIcon"
import TwitterIcon from "./TwitterIcon"

type Props = {
    type: "twitter" | "mail"
    href: string
}

const IconLink: FC<Props> = ({ type, href }) => {
    return (
        <ExternalLink
            href={href}
            className="icon-link"
            aria-label={
                type === "twitter" ? "Visit me on Twitter" : "Write me an email"
            }
        >
            {type === "twitter" ? <TwitterIcon /> : <MailIcon />}
        </ExternalLink>
    )
}

export default IconLink
