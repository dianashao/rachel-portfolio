import React from "react"
import { Carousel } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Rachel Wang" keywords={[`portfolio`, `videography`, `photography`]} />
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className={"d-block w-100"}
          src={img1}
          alt={"First slide"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={"d-block w-100"}
          src={img2}
          alt={"First slide"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id={'img3'}
          className={"d-block w-100"}
          src={img3}
          alt={"First slide"}
        />
      </Carousel.Item>
    </Carousel>
    <div className={'info-container'}>
      <div className={'text'}>
        <h1>RACHEL WANG</h1>
      </div>
      <div className={'text'}>
        <h3>Adventurer, Believer, Filmmaker</h3>
      </div>
      <div className={'text'}>
        <h4>Welcome to my online portfolio. I have a passion for combining my interests with filmmaking and the arts. Here you’ll find samples of my own independent projects and photos. I hope you’ll take some time to browse my site, and please do not hesitate to get in touch if you have any questions about my work.</h4>
      </div>
    </div>
  </Layout>
)

export default IndexPage
