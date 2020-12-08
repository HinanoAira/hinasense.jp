import React from "react"
import { graphql } from "gatsby"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, } from "react-bootstrap"
import { Gallery } from "gatsby-theme-gallery";

export default () => {
  return (
    <PageLayout>
      <SEO title="Gallery" />
      <Container className="text-center pt-1 mt-1" fluid>
        <Gallery />
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
