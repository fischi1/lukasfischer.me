import React, { FC } from "react"
import Button from "./Button"
import clsx from "clsx"

type Props = {
    className?: string
}

const BackButtonRow: FC<Props> = props => (
    <div className={clsx("my-3", props.className)}>
        <Button
            onClick={() => {
                if (!!history) history.go(-1)
            }}
        >
            Back
        </Button>
    </div>
)

export default BackButtonRow
