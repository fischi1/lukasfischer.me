import React, { FC } from "react"

type Props = {
    color?: string
    opacity?: number
}

const MailIcon: FC<Props> = ({ color = "var(--white)", opacity = 1 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21.12"
            height="16.891"
            version="1.1"
            viewBox="0 0 5.588 4.469"
            transform="scale(1.5)"
        >
            <path
                style={{fill: color}}
                stroke="none"
                strokeOpacity="1"
                strokeWidth="0"
                d="M0 292.531s.005 2.977.003 4.465l5.585.004c-.004-1.487-.007-4.46-.007-4.46s-3.72-.008-5.58-.01zm5.023 3.906H.556v-2.692l2.234 1.396 2.233-1.396zm-2.233-1.955l-2.234-1.396h4.467z"
                transform="translate(0 -292.53)"
            ></path>
        </svg>
    )
}

export default MailIcon
