import React, { FC, useEffect, useRef, useState } from "react"
import "./LandingContentAnimatedText.scss"

type Props = {}

const phrases = [
    "developing experiences",
    "making stuff work",
    "solving problems"
]

const LandingContentAnimatedText: FC<Props> = props => {
    const ref = useRef<HTMLDivElement>(null)

    const [index, setIndex] = useState(0)

    const myIterationCounter = useRef(0)

    useEffect(() => {
        const myfunc = () => {
            myIterationCounter.current++

            console.log(myIterationCounter.current)

            if (myIterationCounter.current % 2 == 0) {
                if (ref.current) {
                    ref.current.classList.remove("animated")
                    void ref.current.offsetWidth
                    ref.current.classList.add("animated")
                    setIndex(index + 1)
                }
                console.log("animationend", ref.current)
            }
        }

        if (ref.current) {
            ref.current.addEventListener("animationend", myfunc, false)
        }

        return () => {
            if (ref.current) {
                ref.current.removeEventListener("animationend", myfunc, false)
            }
        }
    })

    return (
        <div
            className="landing-hightlighted-container animated d-inline-block"
            ref={ref}
        >
            <div className="landing-highlighted">
                {phrases[(index + 1) % 3]}
            </div>
            <div className="landing-highlighted">{phrases[index % 3]}</div>
            <div className="spacing-div">{phrases[0]}</div>
        </div>
    )
}

export default LandingContentAnimatedText
