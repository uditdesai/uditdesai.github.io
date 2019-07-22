import { useState, useEffect } from "react"

const useWindowWidth = () => {
  const [width, setWidth] = useState(799)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    window.addEventListener("scroll", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
      window.removeEventListener("scroll", handleWindowResize)
    }
  }, [])

  return width
}

export default useWindowWidth
