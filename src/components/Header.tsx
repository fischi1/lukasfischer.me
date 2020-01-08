import React, { FC } from "react"
import { Navbar } from "react-bootstrap"
import "./Header.scss"
import IconLink from "./icons/IconLink"

type Props = {
    title: string,
    twitterHref: string,
    mailHref: string
}

const Header: FC<Props> = props => (
    <Navbar id="header-component">

        <Navbar.Brand
            id="header-title"
        >{props.title}</Navbar.Brand>

        <Navbar.Text className="mr-auto">
            &nbsp;
        </Navbar.Text>

        <Navbar.Text>
            <span style={{display: "inline-block"}}>
                <IconLink type="mail" href={props.mailHref}/>
            </span>
            <span style={{display: "inline-block", marginLeft: "1.6rem"}}>
                <IconLink type="twitter" href={props.twitterHref}/>
            </span>
        </Navbar.Text>

    </Navbar>
)

export default Header