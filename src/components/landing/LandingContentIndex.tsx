import React, { FC } from "react"
import LandingContentAnimatedText from "./LandingContentAnimatedText"
import "./LandingContentIndex.scss"

type Props = {}

const LandingContentIndex: FC<Props> = ({}) => (
    <div id="landing-content-index">
        <div id="landing-text">
            <h1>
                <span className="text-nowrap">I enjoy</span>
                <br />
                <LandingContentAnimatedText />
            </h1>
        </div>
        <div
            id="landing-subtext"
            className="d-flex flex-column flex-sm-row justify-content-center"
        >
            <div className="lead-container">
                <p className="lead px-0">
                    Web
                    <br />
                    App development
                </p>
            </div>
            <div id="separator">&nbsp;</div>
            <div className="lead-container">
                <p className="lead text-right text-sm-left px-0">
                    Front- & Backend
                    <br />
                    Games
                </p>
            </div>
        </div>
    </div>
)

export default LandingContentIndex
