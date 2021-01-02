import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Font1URL from "../fonts/WorkSans-Regular.ttf"
import Font2URL from "../fonts/VioletSans-Regular.ttf"

import ShareImage from "../images/share-image.jpg"

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

  const metaDescription = site.siteMetadata?.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
    >
      <meta name="image" content={`https://uditdesai.com${ShareImage}`} />
      <meta
        name="description"
        content="Developer and designer specializing in user experience and the web. I'm currently studying computer engineering at the University of Toronto and working on select technology projects for clients."
      />
      <meta property="og:url" content="https://uditdesai.com/" />
      <meta property="og:title" content="Udit Desai" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Developer and designer specializing in user experience and the web. I'm currently studying computer engineering at the University of Toronto and working on select technology projects for clients."
      />
      <meta property="og:image" content={`https:/uditdesai.com${ShareImage}`} />
      <meta name="twitter:title" content="Udit Desai" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@uydesai" />
      <meta
        name="twitter:description"
        content="Developer and designer specializing in user experience and the web. I'm currently studying computer engineering at the University of Toronto and working on select technology projects for clients."
      />
      <meta
        name="twitter:image"
        content={`https://uditdesai.com${ShareImage}`}
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
