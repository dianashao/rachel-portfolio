import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Form } from "react-bootstrap"
import profile_pic from "../images/profile-pic.jpg"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "about" }}>
    <SEO title="About" />
    <div className={'about-page-container'}>
      <div className={'about-page-black-container'}>
        <h2 id={'about-page-title'}>RACHEL WANG</h2>
        <h3>Work or adventure... why not both?</h3>
        <img src={profile_pic} id={'about-page-profile-img'}/>
        <h4>
          As a young professional based in Austin, Texas. I’ve had numerous opportunities to work on and make movies, and I am always looking for exciting, new opportunities that allow me to further my skills. I love applying my creativity and pushing the boundaries of what I’m capable of doing.
        </h4>
        <h4>
          Please take the opportunity to browse through my site, have a look at my showreel, and explore my resume. If you would like to get in touch, feel free to fill out the form below! Let's connect!
        </h4>
        <Button
          variant={"light"}
          className={'button'}
          href={"https://fdec3a45-3ef3-454c-be07-63e22a81df13.filesusr.com/ugd/f9e640_477302a07c8d468dbcaa12920ea2b145.pdf"}
          target={"_blank"}>
            Resume
        </Button>
      </div>
      <div className={'about-page-gold-container'}>
        <h2>LET'S CONNECT</h2>
        <Form id={'contact-form'}>
          <Form.Group controlId="formBasicName">
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicSubject">
            <Form.Control type="subject" placeholder="Subject" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="4" placeholder="Type your message here..." />
          </Form.Group>
          <Button id="submit-button" variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  </Layout>
)

export default AboutPage;
