import { FluidObject } from "gatsby-image"
import React, { FC, useMemo, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import GalleryPreviewThumbnail from "./GalleryPreviewThumbnail"
import LightboxWrapper from "./LightboxWrapper"
import "./ProjectGallery.scss"

type Props = {
    images: FluidObject[]
}

const ProjectGallery: FC<Props> = props => {
    const [open, setOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    const openImage = (index: number) => {
        setImageIndex(index)
        setOpen(true)
    }

    const srcArr = props.images.map(image => image.src)

    const memoizedThumbnails = useMemo(
        () => (
            <Row noGutters>
                {props.images.map((img, i) => (
                    <Col xs={6} md={4} xl={3} key={img.src}>
                        <GalleryPreviewThumbnail
                            fluid={img}
                            onClick={() => openImage(i)}
                        />
                    </Col>
                ))}
            </Row>
        ),
        [props.images]
    )

    return (
        <Container className="project-gallery mt-3 mb-1" fluid>
            <LightboxWrapper
                open={open}
                setOpen={setOpen}
                imageIndex={imageIndex}
                setImageIndex={setImageIndex}
                images={srcArr}
            />
            {memoizedThumbnails}
        </Container>
    )
}

export default ProjectGallery
