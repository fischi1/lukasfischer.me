let isWebpSupported = false

if (typeof window !== "undefined") {
    let elem = document.createElement("canvas")

    if (!!(elem.getContext && elem.getContext("2d")))
        isWebpSupported =
            elem.toDataURL("image/webp").indexOf("data:image/webp") == 0

    //above lines report false for firefox but it supports webp starting with version 65
    if (!isWebpSupported) {
        let match = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./)
        let ver = match ? parseInt(match[1]) : 0
        isWebpSupported = ver >= 65
    }
}

export default isWebpSupported
