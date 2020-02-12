import "./src/scss/main.scss"

export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
        import(`intersection-observer`)
        console.log(`# IntersectionObserver is polyfilled!`)
    }

    const styles = [
        "color: #ffc914;",
        "background:#040507;",
        "font-size:25px;",
        "padding: 10px 15px;",
        "display: block;",
        "font-family: monospace"
    ].join(";")

    console.log("%cHello 👋😃", styles)
    console.log("%cInterested in the source code? ⚛️", styles)
    console.log(
        "%cCheck it out on github https://github.com/fischi1/lukasfischer.me",
        styles
    )
}
