import { Link } from "gatsby"
import React, { FC } from "react"
import { Navbar } from "react-bootstrap"
import IconLink from "../icon/IconLink"
import "./Header.scss"

type Props = {
    title: string
    twitterHref: string
    mailHref: string
}

const Header: FC<Props> = (props) => (
    <Navbar id="header-component">
        <Navbar.Brand id="header-title">
            <Link to="/">{props.title}</Link>
        </Navbar.Brand>

        <Navbar.Text className="mr-auto">&nbsp;</Navbar.Text>

        <Navbar.Text className="text-nowrap">
            <span className="mail">
                <IconLink type="mail" href={props.mailHref} />
            </span>
            <span className="twitter">
                <IconLink type="twitter" href={props.twitterHref} />
            </span>
        </Navbar.Text>
    </Navbar>
)

export default Header
