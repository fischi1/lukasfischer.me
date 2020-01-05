import React, { FC } from "react"
import "./Landing.scss"

type Props = {}

const Landing: FC<Props> = props => {
    return (
        <div
            id="landing-component"
            className="d-flex flex-column align-items-center justify-content-center"
        >
            <div id="landing-text">
                <h1>
                    I like{" "}
                    <span id="landing-highlighted">developing experiences</span>
                </h1>
            </div>
            <div className="d-flex">
                <div>
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
                <div>
                    <p className="lead">
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
