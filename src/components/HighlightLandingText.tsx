import React, { FC, ReactNode } from "react";

type Props = {
    text: string
}

const HighlightLandingText: FC<Props> = ({text}) => {

    const ret : ReactNode[] = [];

    for (var i = 0; i < text.length; i++) {
        ret.push(<span key={i}>{text.charAt(i)}</span>)
    }

    return (
        <>
            {ret}
        </>
    );
}

export default HighlightLandingText;