import React, { createElement } from "react"
import { Col, Row } from "react-bootstrap"
import RehypeReact from "rehype-react"
import ExternalLink from "../components/externalLink/ExternalLink"
import SectionHeading from "../components/sectionHeading/SectionHeading"

const ProjectRow = ({ children }) => (
    <Row className="justify-content-center">{children}</Row>
)

const ProjectCol = ({ children }) => (
    <Col xs={12} lg={6}>
        {children}
    </Col>
)

const projectAstCompiler = new RehypeReact({
    createElement: createElement,
    components: {
        h2: SectionHeading,
        a: ExternalLink,
        "bs-row": ProjectRow,
        "bs-col": ProjectCol
    }
}).Compiler

export default projectAstCompiler
