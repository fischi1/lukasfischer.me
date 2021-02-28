---
title: "LEDctrl"
short: "Flutter app to control addressable leds"
order: -1
thumbnail: "../../images/project/ledctrl/ledctrl_overview.png"
landing: { image: "../../images/project/ledctrl/ledctrl_overview.png" }
images:
    [
        "../../images/project/ledctrl/ledctrl_01.png",
        "../../images/project/ledctrl/ledctrl_02.png",
        "../../images/project/ledctrl/ledctrl_03.png",
        "../../images/project/ledctrl/ledctrl_04.png",
        "../../images/project/ledctrl/ledctrl_05.png",
        "../../images/project/ledctrl/ledctrl_06.png",
        "../../images/project/ledctrl/ledctrl_07.png",
        "../../images/project/ledctrl/ledctrl_08.png",
        "../../images/project/ledctrl/ledctrl_09.png",
        "../../images/project/ledctrl/ledctrl_10.png",
        "../../images/project/ledctrl/ledctrl_11.png",
        "../../images/project/ledctrl/ledctrl_12.png"
    ]
---

**LEDctrl** is an app for controlling adressable led strips. Set up different color and effect profiles, switch between them or toggle the lights completely on/off.

-   Create your own color compositions
-   Let the app create a random color configuration
-   Choose from a selection of images based on your mood
-   Select an effect and configure it to your liking (ping pong, scroboscope, rainbow)

I chose this project to make myself familiar with Google's Flutter development framework for cross platform apps and the Dart programming language.

Developed alongside this project was a Node.js backend that runs on a Raspberry Pi. The server application receives calls from the app and communicates with [RPI-WS2812-Server](https://github.com/tom-2015/rpi-ws2812-server), a low level application for controlling addressable led strips over a tcp connection.

<bs-row>

<bs-col>

## Technologies

-   [Flutter](https://flutter.dev/)
-   [bloc](https://bloclibrary.dev/)
-   [Node.js](https://nodejs.org/)
-   [RPI-WS2812-Server](https://github.com/tom-2015/rpi-ws2812-server)

</bs-col>

<bs-col>

## Repositories

-   [LEDctrl](https://github.com/fischi1/LEDctrl)
-   [Node.js backend](https://github.com/fischi1/LEDctrl-backend)

</bs-col>

</bs-row>
