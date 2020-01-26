import React, { createElement, FC } from "react"
import { Col, Row } from "react-bootstrap"
import RehypeReact from "rehype-react"
import SectionHeading from "../components/SectionHeading"
import TargetBlankLink from "../components/TargetBlankLink"

const ProjectCol: FC<{}> = props => (
    <Col xs={12} lg={6}>
        {props.children}
    </Col>
)

const projectAstCompiler = new RehypeReact({
    createElement: createElement,
    components: {
        h2: SectionHeading,
        a: TargetBlankLink,
        "bs-row": Row,
        "bs-col": ProjectCol
    }
}).Compiler

export default projectAstCompiler
