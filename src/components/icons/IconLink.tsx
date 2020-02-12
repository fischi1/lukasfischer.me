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
        <TargetBlankLink
            href={href}
            className="icon-link"
            aria-label={
                type === "twitter" ? "Visit me on Twitter" : "Write me an email"
            }
        >
            {type === "twitter" ? <TwitterIcon /> : <MailIcon />}
        </TargetBlankLink>
    )
}

export default IconLink
