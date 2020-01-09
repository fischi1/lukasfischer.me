import React, { FC } from "react"
import "./Landing.scss"
import HighlightLandingText from "./HighlightLandingText"

type Props = {}

const Landing: FC<Props> = props => {
    return (
        <div
            id="landing-component"
            className="d-flex flex-column align-items-center justify-content-center"
        >
            <div id="landing-text">
                <h1>
                    <span className="text-nowrap">I like</span>
                    {" "}
                    <span id="landing-highlighted" className="text-nowrap">
                        <HighlightLandingText text="developing experiences" />
                    </span>
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
                <div id="separator">
                    &nbsp;
                </div>
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
}

export default Landing
