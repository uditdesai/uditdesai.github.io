import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Favicon16 from "../assets/favicon16.png"
import Favicon32 from "../assets/favicon32.png"
import SocialImage from "../images/social-image.png"
import { Helmet } from "react-helmet"

const App = () => {
  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <>
      <Helmet
        meta={[
          { name: "description", content: "Udit Desai" },
          { name: "keywords", content: "developer, designer" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Udit Desai" },
          { property: "og:image", content: `${SocialImage}` },
        ]}
      >
        <title>Udit Desai</title>
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
      </Helmet>
    </>
  )
}

export default App
