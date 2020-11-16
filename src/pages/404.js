import React, { useEffect } from "react"
import { navigate } from "gatsby"

const App = () => {
  useEffect(() => {
    navigate("/")
  }, [])

  return <></>
}

export default App
