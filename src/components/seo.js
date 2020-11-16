import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Font1URL from "../fonts/WorkSans-Regular.ttf"
import Font2URL from "../fonts/VioletSans-Regular.ttf"

import FacebookThumbnail from "../images/thumbnail-facebook.jpg"
import TwitterThumbnail from "../images/thumbnail-twitter.jpg"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s — ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <meta
        name="image"
        content={`https://uditdesai.com${FacebookThumbnail}`}
      />
      <meta
        property="og:image"
        content={`https:/uditdesai.com${FacebookThumbnail}`}
      />
      <meta name="twitter:title" content="Udit Desai" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content="I'm a developer specializing in user experience and the web."
      />
      <meta
        name="twitter:image"
        content={`https://uditdesai.com${TwitterThumbnail}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/favicon180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon16.png"
      />
      <link rel="preload" href={Font1URL} as="font" crossorigin="anonymous" />
      <link rel="preload" href={Font2URL} as="font" crossorigin="anonymous" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
