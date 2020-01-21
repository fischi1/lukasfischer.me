import React, { FC } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import Button from "./Button"

type Props = {
    open?: boolean
    setOpen: (open: boolean) => void
    images: string[]
    imageIndex: number
    setImageIndex: (newIndex: number) => void
}

const LightboxWrapper: FC<Props> = ({
    open,
    setOpen,
    images,
    imageIndex,
    setImageIndex
}) => {
    if (!open) return null

    return (
        <Lightbox
            mainSrc={images[imageIndex]}
            nextSrc={images[(imageIndex + 1) % images.length]}
            prevSrc={images[(imageIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>
                setImageIndex((imageIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
                setImageIndex((imageIndex + 1) % images.length)
            }
            enableZoom={false}
            animationOnKeyInput
            animationDuration={150}
            toolbarButtons={[
                <Button onClick={() => setOpen(false)}>Close</Button>
            ]}
        />
    )
}

export default LightboxWrapper
