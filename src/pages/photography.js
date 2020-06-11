import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Videography = () => (
  <Layout pageInfo={{ pageName: "photography" }}>
    <SEO title="Photography" />
    <div className={'page-container'}>
      <div className={'gray-container'}>
        <h1 className={'page-title'}>A DYNAMIC RANGE</h1>
        <h4>I describe myself as a "jack-of-all-trades" and I think my photography reflects that. From taking professional portrait photos to capturing exciting moments from adventures, I am always there with my camera ready to snap the shot.</h4>
      </div>
      <div className={'black-container'}>

      </div>
    </div>
  </Layout>
)

export default Videography;
