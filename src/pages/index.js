import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="496"
          height="279"
          fluid
          src="../../image/logo.png"
          alt="HinaSense"
        />
        {unemployed && (
          <p className="mt-2">
            <b>ねこになりたいおとしごろ(=^・・^=)</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="last-name">{lastName}</span>&nbsp;
            <span className="first-name">{firstName}</span>
          </h1>
          <p>
            <i>
              {occupation} &nbsp;
              {dark ? `今日も楽しい夢を見る` : `今日も夢を追いかける`}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://github.com/HinanoAira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://twitter.com/VRHinano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="icons twitter"
              title="Twitter"
            />
          </a>
          <a
            href="mailto:aira@hinasense.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
        </div>
        <div class="minmojilogo">
        <a href="https://minmoji.ucda.jp/" target="_blank"><img src="https://minmoji.ucda.jp/seal/https%3A__www.hinasense.jp" alt="みんなの文字" width="120" height="70" /></a>
        </div>
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
