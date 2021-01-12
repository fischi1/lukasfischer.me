import { Link, PageProps } from "gatsby"
import React, { FC } from "react"

const SecondPage: FC<PageProps> = () => (
    <>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </>
)

export default SecondPage
