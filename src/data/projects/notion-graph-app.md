---
title: "Notion Graph"
short: "Visualize your Notion page structure"
order: -2
demo: "https://lukasfischer.me/notion-graph"
noun: "web app"
thumbnail: "../../images/project/notionGraph/notiongraph_thumb.png"
landing: { image: "../../images/project/notionGraph/notiongraph_overview.png" }
images:
    [
        "../../images/project/notionGraph/notiongraph_0.png",
        "../../images/project/notionGraph/notiongraph_1.png",
        "../../images/project/notionGraph/notiongraph_2.png",
        "../../images/project/notionGraph/notiongraph_3.png",
        "../../images/project/notionGraph/notiongraph_4.png",
        "../../images/project/notionGraph/notiongraph_5.png",
        "../../images/project/notionGraph/notiongraph_6.png",
        "../../images/project/notionGraph/notiongraph_7.png",
        "../../images/project/notionGraph/notiongraph_8.png",
        "../../images/project/notionGraph/notiongraph_9.png",
        "../../images/project/notionGraph/notiongraph_10.png",
        "../../images/project/notionGraph/notiongraph_11.png"
    ]
---

This tool creates interactive graphs out of Notion workspaces and pages. You can get to the app [here](https://lukasfischer.me/notion-graph).

[Notion](https://notion.so) is a note-taking and personal organization tool. Keeping an overview over your pages is important if you have many notes or follow the Zettelkasten system. Notion itself doesn't offer any functionalities to generate an overview of your page structure as a graph.

That is the reason why I created this app. It creates a force-directed graph out of your Notion data. All you need is a HTML export of your whole workspace or pages.

## Features

-   Create a graph out of your Notion exports
-   Change how the graph is generated
-   Collapse pages with a lot of children (lists, boards, databases, ...)
-   Export your graph as an image
-   Clicking on a node opens the page in Notion
-   The last generated graph is stored in your browser

## Implementation

`d3` and `d3-force` are used for graph creation and the simulation of physical forces between nodes. The user interface is implemented with _React_. The graph generation and application logic communicates with the user interface through [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).

Notion graph is a client-side application. The export-zips are parsed in the browser with [JSZip](https://github.com/Stuk/jszip). No data is uploaded to any server.

The source code is available on [GitHub](https://github.com/fischi1/notion-graph).

<bs-row>
 
<bs-col>

## Links

-   [Application](https://lukasfischer.me/notion-graph)
-   [GitHub repository](https://github.com/fischi1/notion-graph)

</bs-col>

<bs-col>

## Technologies

-   [React](https://reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [D3.js](https://d3js.org/) and [d3-force](https://github.com/d3/d3-force)
-   [JSZip](https://github.com/Stuk/jszip)
-   [Vite](https://vitejs.dev/)

</bs-col>

</bs-row>
