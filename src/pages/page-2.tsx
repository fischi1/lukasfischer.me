import React, { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"
import BackButtonRow from "../components/BackButtonRow"
import Landing from "../components/Landing"
import Layout from "../components/Layout"
import ProjectGallery from "../components/ProjectGallery"
import SectionHeading from "../components/SectionHeading"
import SEO from "../components/Seo"
import TargetBlankLink from "../components/TargetBlankLink"
import VideoIframe from "../components/VideoIframe"

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
                <VideoIframe
                    className="pb-5"
                    src="https://www.youtube-nocookie.com/embed/ohNLuQ7aotY"
                />
            </Container>
        </Landing>
        <Container className="pt-5">
            <p>
                <b>Infinite Boards</b> is an Augmented Reality board game for
                Android devices. Through AR this application combines a board
                game with minigames. It can be enjoyed with up to four players
                locally or against virtual opponents.
            </p>
            <p>
                This project was the thesis for my matriculation at HTL Wels in
                2015. When we were able to show it off and let people play the
                game, we got very positive feedback. We were able to watch how
                people really enjoyed our virtual playing fields. Infinite
                Boards also achieved first place in two competitions for HTL
                projects.
            </p>
            <p>
                The thesis was done together with Sophie Klein. My
                responsibilities were the technical implementation, testing and
                game design.
            </p>

            <Row>
                <Col xs={12} lg={6}>
                    <SectionHeading>Technologies</SectionHeading>
                    <ul>
                        <li>
                            <TargetBlankLink href="Vuforia Augmented Reality SDK by Qualcomm">
                                Unity
                            </TargetBlankLink>{" "}
                            game engine
                        </li>
                        <li>
                            <TargetBlankLink href="https://www.vuforia.com/">
                                Vuforia Augmented Reality SDK
                            </TargetBlankLink>{" "}
                            by Qualcomm
                        </li>
                    </ul>
                </Col>
                <Col xs={12} lg={6}>
                    <SectionHeading>Awards</SectionHeading>
                    <ul>
                        <li>
                            <TargetBlankLink href="https://caesarino2015.submit.to/landing/award/ausschreibung-info">
                                Ceasarino 2015 by WKO Oberösterreich
                            </TargetBlankLink>
                            <br />
                            Category: BHS und AHS Oberstufe, Online/Interactive
                            <br />
                            Won!
                        </li>
                        <li>
                            <TargetBlankLink href="https://www.meinbezirk.at/wels-wels-land/c-lokales/kiwanis-preis-prix-talentis-fuer-htl-diplomarbeiten_a1393034">
                                Prix Talentis by Kiwanis Club Wels
                            </TargetBlankLink>
                            <br />
                            Category: Information Technology
                            <br />
                            Won!
                        </li>
                    </ul>
                </Col>
            </Row>
            <BackButtonRow className="mt-5" />
        </Container>
        <ProjectGallery
            images={[
                "https://lukasfischer.me/assets/images/infiniteboards.jpg",
                "https://lukasfischer.me/assets/images/infiniteboards-4.jpg",
                "https://lukasfischer.me/assets/images/infiniteboards-1.jpg",
                "https://lukasfischer.me/assets/images/infiniteboards-2.jpg",
                "https://lukasfischer.me/assets/images/0.png",
                "https://lukasfischer.me/assets/images/13.png",
                "https://lukasfischer.me/assets/images/colorshoot.png",
                "https://lukasfischer.me/assets/images/14.png"
            ]}
        />
    </Layout>
)

export default SecondPage
