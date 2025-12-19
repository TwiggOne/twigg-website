import React from "react"

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)") // lg breakpoint

    const listener = () => setIsDesktop(media.matches)
    listener()

    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [])

  return isDesktop
}
