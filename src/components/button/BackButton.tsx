import React, { ComponentProps, FC } from "react"
import { navigate } from "@reach/router"
import Button from "./Button"

type Props = Omit<ComponentProps<typeof Button>, "onClick">

const BackButton: FC<Props> = (props) => {
    const goBack = () => {
        navigate(-1)
    }

    return (
        <Button onClick={goBack} {...props}>
            Back
        </Button>
    )
}

export default BackButton
