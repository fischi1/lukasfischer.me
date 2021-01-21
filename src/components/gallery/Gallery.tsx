import { FluidObject } from "gatsby-image"
import React, { FC, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import GalleryThumbnail from "./GalleryThumbnail"
import isWebpSupported from "./isWebpSupported"
import LightboxWrapper from "./LightboxWrapper"

type Props = {
    images: FluidObject[]
}

const Gallery: FC<Props> = ({ images }) => {
    const [open, setOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    const openImage = (index: number) => {
        setImageIndex(index)
        setOpen(true)
    }

    const srcArr = isWebpSupported
        ? images.map((image) => image.srcWebp + "")
        : images.map((image) => image.src + "")

    return (
        <Container className="project-gallery mt-3 mb-1" fluid>
            <LightboxWrapper
                open={open}
                setOpen={setOpen}
                imageIndex={imageIndex}
                setImageIndex={setImageIndex}
                images={srcArr}
            />
            <Row>
                {images.map((img, i) => (
                    <Col xs={6} md={4} xl={3} className="px-0" key={img.src}>
                        <GalleryThumbnail
                            index={i}
                            fluid={img}
                            onClick={() => openImage(i)}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Gallery
