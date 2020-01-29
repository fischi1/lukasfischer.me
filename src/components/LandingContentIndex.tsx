import React, { FC } from "react"
import LandingContentAnimatedText from "./LandingContentAnimatedText"
import "./LandingContentIndex.scss"

type Props = {}

const LandingContentIndex: FC<Props> = props => (
    <div id="landing-content-index">
        <div id="landing-text">
            <h1>
                <span className="text-nowrap">I like</span>{" "}
                <LandingContentAnimatedText />
            </h1>
        </div>
        <div id="landing-subtext" className="d-flex flex-column flex-sm-row">
            <div className="lead-container">
                <p className="lead">
                    Front end
                    <br />
                    Back end
                    <br />
                    Web development
                </p>
            </div>
            <div id="separator">&nbsp;</div>
            <div className="lead-container">
                <p className="lead text-right text-sm-left">
                    App development
                    <br />
                    Video games
                    <br />
                    Computer graphics
                </p>
            </div>
        </div>
    </div>
)

export default LandingContentIndex
