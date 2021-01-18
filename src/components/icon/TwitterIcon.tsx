import React, { FC } from "react"

type Props = {
    color?: string
    opacity?: number
}

const TwitterIcon: FC<Props> = ({ color = "var(--white)" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="17.081"
            version="1.1"
            viewBox="0 0 5.558 4.519"
            transform="scale(1.5)"
        >
            <path
                style={{ fill: color }}
                strokeWidth="0"
                d="M1.745 297c2.097 0 3.244-1.74 3.244-3.245v-.147c.222-.16.415-.362.569-.591a2.31 2.31 0 01-.656.18c.235-.14.416-.365.502-.632-.22.131-.465.225-.725.276a1.142 1.142 0 00-1.944 1.04 3.238 3.238 0 01-2.35-1.191 1.144 1.144 0 00.354 1.523 1.158 1.158 0 01-.517-.142v.016c0 .551.394 1.014.914 1.118a1.111 1.111 0 01-.513.02 1.14 1.14 0 001.065.792 2.287 2.287 0 01-1.688.474c.503.32 1.103.509 1.746.509"
                className="st0"
                transform="translate(0 -292.48)"
            />
        </svg>
    )
}

export default TwitterIcon
