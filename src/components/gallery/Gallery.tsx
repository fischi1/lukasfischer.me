import { FluidObject } from "gatsby-image"
import React, { FC, useMemo, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import GalleryThumbnail from "./GalleryThumbnail"
import LightboxWrapper from "./LightboxWrapper"
import "./Gallery.scss"
import isWebpSupported from "./isWebpSupported"

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

    const memoizedThumbnails = useMemo(
        () => (
            <Row>
                {images.map((img, i) => (
                    <Col xs={6} md={4} xl={3} className="px-0" key={img.src}>
                        <GalleryThumbnail
                            fluid={img}
                            onClick={() => openImage(i)}
                        />
                    </Col>
                ))}
            </Row>
        ),
        [images]
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

export default Gallery
