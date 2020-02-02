import { useEffect } from "react"

let useDebugOutline = () => {}

if (process.env.NODE_ENV === "development") {
    const styleId = "useDebugOutline-styles"

    const cssText = `
        * {
            outline: 1px solid rgba(255, 0, 0, .3);
        }
    `

    const toggleOutline = () => {
        let styleElem = document.getElementById(styleId)
        if (styleElem) {
            styleElem.remove()
            return
        }

        let style = document.createElement("style")
        style.type = "text/css"
        style.id = styleId
        style.innerHTML = cssText
        document.getElementsByTagName("head")[0].appendChild(style)
    }

    useDebugOutline = () => {
        useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "F7") {
                    e.preventDefault()
                    e.stopPropagation()
                    e.stopImmediatePropagation()

                    toggleOutline()
                }
            }

            document.addEventListener("keydown", handleKeyDown, false)

            return () => {
                document.removeEventListener("keydown", handleKeyDown, false)
            }
        }, [])
    }
}

export default useDebugOutline
