import { useState, useEffect } from "react"

const useWindowWidth = () => {
  const [width, setWidth] = useState(799)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  return width
}

export default useWindowWidth
