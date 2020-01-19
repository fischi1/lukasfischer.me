import React, { FC } from "react"
import Button from "./Button"

type Props = {}

const BackButtonRow: FC<Props> = props => (
    <>
        <div className="my-3">
            <Button
                onClick={() => {
                    if (!!history) history.go(-1)
                }}
            >
                Back
            </Button>
        </div>
    </>
)

export default BackButtonRow
