import React, { FC, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import GalleryPreviewThumbnail from "./GalleryPreviewThumbnail"
import LightboxWrapper from "./LightboxWrapper"
import "./ProjectGallery.scss"

type Props = {
    images: string[]
}

const ProjectGallery: FC<Props> = props => {
    const [open, setOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    const openImage = (index: number) => {
        setImageIndex(index)
        setOpen(true)
    }

    return (
        <Container className="project-gallery mt-3 mb-1" fluid>
            <LightboxWrapper
                open={open}
                setOpen={setOpen}
                imageIndex={imageIndex}
                setImageIndex={setImageIndex}
                images={props.images}
            />

            <Row noGutters>
                {props.images.map((imgUrl, i) => (
                    <Col xs={6} md={4} xl={3} key={imgUrl}>
                        <GalleryPreviewThumbnail
                            src={imgUrl}
                            onClick={() => openImage(i)}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProjectGallery
