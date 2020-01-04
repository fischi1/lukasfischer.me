import { Link } from "gatsby"
import React, { FC } from "react"
import { Navbar } from "react-bootstrap"
import "./Header.scss"

type Props = {
    title: string
}

const Header: FC<Props> = ({ title }) => (
    <Navbar 
    >
        <Navbar.Brand
            id="header-title"
        >{title}</Navbar.Brand>
        <Navbar.Text>
            Icons here
        </Navbar.Text>
    </Navbar>
)

export default Header
