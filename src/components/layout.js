/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0">
          <Navbar pageInfo={pageInfo} />
        </Container>
        <Container fluid className={"main"}>
          <Row noGutters>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <a id ='email' href={"mailto: rachelwang.tx@gmail.com"}>
                  rachelwang.tx@gmail.com
                </a>
              </footer>
              <footer>
                281-995-5462
              </footer>
              <br/>
              <footer>
                © 2019 by Rachel Wang.
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
