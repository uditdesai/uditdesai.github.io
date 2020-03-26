import React, { useEffect } from "react"
import { navigate } from "gatsby"
import favicon16 from "../assets/favicon16.png"
import favicon32 from "../assets/favicon32.png"
import favicon64 from "../assets/favicon64.png"
import { Helmet } from "react-helmet"

const App = () => {
  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <>
      <Helmet
        meta={[
          { name: "description", content: "Udit Desai - Developer" },
          { name: "keywords", content: "developer" },
        ]}
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `${favicon16}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `${favicon32}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "64x64",
            href: `${favicon64}`,
          },
        ]}
      >
        <title>UDIT DESAI</title>
      </Helmet>
    </>
  )
}

export default App
