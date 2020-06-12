import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Form } from "react-bootstrap"
import logo from "../images/Logo.jpg"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "red-rabbit" }}>
    <SEO title="Red Rabbit" />
    <div className={'page-container'}>
      <div className={'about-page-black-container'}>
        <h2 id={'about-page-title'}>RED RABBIT PRODUCTIONS</h2>
        <h3>Video Production & Editing Business</h3>
        <h4>
          Inspired by by embracing my Asian culture - "Red" in Chinese culture symbolizes luck, joy, and happiness "Rabbit" because that is my Chinese zodiac, and "Productions" because I would love to film or edit your next project! Let's chat and make it happen!
        </h4>
        <Button
          variant={"light"}
          className={'button'}
          href={"https://www.facebook.com/redrabproductions/"}
          target="_blank">
          Check It Out
        </Button>
      </div>
      <div className={'white-container'}>
        <img src={logo} id={'red-rabbit-logo'}></img>
      </div>
    </div>
  </Layout>
)

export default AboutPage;
