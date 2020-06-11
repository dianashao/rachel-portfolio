import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Videography = () => (
  <Layout pageInfo={{ pageName: "videography" }}>
    <SEO title="Videography" />
      <div className={'page-container'}>
        <div className={'gray-container'}>
          <h1 className={'page-title'}>STORY</h1>
          <h4>I strive to create visual and engaging stories. I desire for my audiences to feel some sort of emotion - excitement, warmth, empowerment, etc. - by the end of the video. Whether it's capturing the beauty of nature or the kindness of humans, I do my best to craft a meaningful story.</h4>
        </div>
        <div className={'black-container'}>

        </div>
      </div>
  </Layout>
)

export default Videography;
