import React, { FC } from "react"
import { Container } from "react-bootstrap"
import AspectRatioDiv from "../components/AspectRatioDiv"
import BackButtonRow from "../components/BackButtonRow"
import Landing from "../components/Landing"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage: FC = props => (
    <Layout>
        <SEO title="Page two" />
        <Landing>
            <Container>
                <div className="text-center">
                    <h1 className="font-gradient my-5 d-inline-block">
                        Infinite Boards
                    </h1>
                </div>
                <div className="pb-5">
                    <AspectRatioDiv>
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/ohNLuQ7aotY"
                            frameBorder={0}
                            allowFullScreen
                            style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%"
                            }}
                        ></iframe>
                    </AspectRatioDiv>
                </div>
            </Container>
        </Landing>
        <Container>
            <BackButtonRow />
            <p>
                I currently live in Vienna, Austria. My interest in coding and
                software development started very early with the age of 12,
                thanks to my fascination in video games. Shortly after that I
                started to teach myself HTML and CSS. This also led me to choose
                a technical school career.
            </p>

            <p>
                I’m interested in front-end, back-end, web and app development,
                UX design, video game dev and computer graphics. This also lead
                to the topics of my matriculation project and bachelor thesis.
            </p>
            <p>
                I currently live in Vienna, Austria. My interest in coding and
                software development started very early with the age of 12,
                thanks to my fascination in video games. Shortly after that I
                started to teach myself HTML and CSS. This also led me to choose
                a technical school career.
            </p>

            <p>
                I’m interested in front-end, back-end, web and app development,
                UX design, video game dev and computer graphics. This also lead
                to the topics of my matriculation project and bachelor thesis.
            </p>
            <p>
                I currently live in Vienna, Austria. My interest in coding and
                software development started very early with the age of 12,
                thanks to my fascination in video games. Shortly after that I
                started to teach myself HTML and CSS. This also led me to choose
                a technical school career.
            </p>

            <p>
                I’m interested in front-end, back-end, web and app development,
                UX design, video game dev and computer graphics. This also lead
                to the topics of my matriculation project and bachelor thesis.
            </p>
        </Container>
    </Layout>
)

export default SecondPage
