import React, { FC, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "react-image-lightbox/style.css"
import Button from "./Button"
import GalleryPreviewThumbnail from "./GalleryPreviewThumbnail"
import LightboxWrapper from "./LightboxWrapper"
import "./ProjectGallery.scss"

type Props = {
    images: string[]
}

const ProjectGallery: FC<Props> = props => {
    const [open, setOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <Container className="project-gallery my-5" fluid>
            <LightboxWrapper 
                open={open}
                setOpen={setOpen}
                imageIndex={imageIndex}
                setImageIndex={setImageIndex}
                images={props.images}
            />
            <div>
                <Button onClick={() => setOpen(true)}>Open</Button>
            </div>
            <Row noGutters>
                {props.images.map(imgUrl => (
                    <Col xs={6} md={4} xl={3} key={imgUrl}>
                        <div className="m-1">
                            <GalleryPreviewThumbnail src={imgUrl} />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProjectGallery
