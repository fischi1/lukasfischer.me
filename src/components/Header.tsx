import React, { FC } from "react"
import { Navbar } from "react-bootstrap"
import "./Header.scss"
import MailIcon from "./icons/MailIcon"
import TwitterIcon from "./icons/TwitterIcon"

type Props = {
    title: string
}

const Header: FC<Props> = ({ title }) => (
    <Navbar 
    >
        <Navbar.Brand
            id="header-title"
        >{title}</Navbar.Brand>
        <Navbar.Text className="mr-auto">
            &nbsp;
        </Navbar.Text>
        <Navbar.Text>
            <span style={{display: "inline-block"}}>
                <MailIcon />
            </span>
            <span style={{display: "inline-block", marginLeft: "1.6rem"}}>
                <TwitterIcon />
            </span>
        </Navbar.Text>
    </Navbar>
)

export default Header
