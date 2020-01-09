import React, { FC, ReactNode } from "react";

type Props = {
    text: string
}

const HighlightLandingText: FC<Props> = ({text}) => {

    const ret : ReactNode[] = [];

    for (var i = 0; i < text.length; i++) {
        ret.push(<span>{text.charAt(i)}</span>)
    }

    return (
        <>
            {ret}
        </>
    );
}

export default HighlightLandingText;