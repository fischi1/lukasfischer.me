---
title: "EZ Stream Access"
short: "Browser extension to open followed Twitch channels from a menu"
order: -3
demo: "https://chromewebstore.google.com/detail/ez-stream-access/jjnclaliegbplphbgdcjmcepdmjhpokm"
thumbnail: "../../images/project/ezStreamAccess/ezstreamaccess_overview.png"
landing:
    { image: "../../images/project/ezStreamAccess/ezstreamaccess_overview.png" }
images:
    [
        "../../images/project/ezStreamAccess/ezstreamaccess_0.png",
        "../../images/project/ezStreamAccess/ezstreamaccess_1.png",
        "../../images/project/ezStreamAccess/ezstreamaccess_2.png",
        "../../images/project/ezStreamAccess/ezstreamaccess_3.png"
    ]
---

The goal was to create a browser extension that streamlines my Twitch usage by saving me a few clicks when opening channels I follow. When watching Twitch channels on a second monitor, you are actually only interested in the video player. Twitch offers a "Popout Player" functionality but to reach that you have to click multiple times and it also doesn't open the stream in the normal browser tab. So I decided to implement a browser extension that uses the Twitch API to display followed channels and directly open them with a fullscreen player that occupies the whole browser tab.

The extension can be used by anyone and is available in the [Chrome Web Store](https://chromewebstore.google.com/detail/ez-stream-access/jjnclaliegbplphbgdcjmcepdmjhpokm) for Chromium-based browsers.

## Features

-   Save a few clicks by being able to open Twitch channels directly from the extension menu accessible from the browser toolbar.
-   Clicking on the thumbnail opens the channel with the video player covering the whole browser window. No chat or Twitch UI. Perfect for selecting streams to watch on your second monitor! EZ Stream Access also remembers the stream quality you selected in the popup. This saves you a few seconds you normally have to spend selecting your quality.
-   Clicking on the stream title or profile picture of the channel opens the normal channel page.
-   A click on the name of the streamer leads you to their videos page.
-   And a click on the game or category name opens the directory page.

## Implementation

As a base I started off with the [web-extension-starter-kit](https://github.com/stateful/web-extension-starter-kit) from _Stateful_. It already contains a lot of useful setup. For example directly starting a browser with _WebdriverIO_ with the extension pre-installed.

The project files are built with _Vite_. The frontend is implemented with _React_ and _Tailwind CSS_. The main popup communicates with a service worker background script via messages.

The background script is responsible for keeping track of state as well as using the [web extension APIs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API) to use browser features. These include things like

-   handling clicks
-   persisting state
-   retrieving information from the [Twitch API](https://dev.twitch.tv/docs/api/)
-   handling the OAuth flow to fetch an access token for the user

For unit tests I chose _Vitest_ as a drop in replacement for _Jest_, since I am already using _Vite_.

The source code is available on [GitHub](https://github.com/fischi1/ez-stream-access).

<bs-row>
 
<bs-col>

## Links

-   [EZ Stream Access in the Chrome Web Store](https://chromewebstore.google.com/detail/ez-stream-access/jjnclaliegbplphbgdcjmcepdmjhpokm)
-   [GitHub repository](https://github.com/fischi1/ez-stream-access)

</bs-col>

<bs-col>

## Technologies

-   [React](https://reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Vite](https://vitejs.dev/)
-   [Vitest](https://vitest.dev/)
-   [WebdriverIO](https://webdriver.io/)

</bs-col>

</bs-row>
