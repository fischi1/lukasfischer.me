import { Link } from "gatsby"
import React, { FC } from "react"
import { Navbar } from "react-bootstrap"
import IconLink from "../icon/IconLink"
import "./Header.scss"

type Props = {
    title: string
    twitterHref?: string
    mailHref?: string
}

const Header: FC<Props> = ({ title, mailHref, twitterHref }) => (
    <Navbar id="header-component">
        <Navbar.Brand id="header-title">
            <Link to="/">{title}</Link>
        </Navbar.Brand>

        <Navbar.Text className="mr-auto">&nbsp;</Navbar.Text>

        <Navbar.Text className="text-nowrap">
            {mailHref && (
                <span className="mail">
                    <IconLink type="mail" href={mailHref} />
                </span>
            )}
            {twitterHref && (
                <span className="twitter">
                    <IconLink type="twitter" href={twitterHref} />
                </span>
            )}
        </Navbar.Text>
    </Navbar>
)

export default Header
