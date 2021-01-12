module.exports = {
    siteMetadata: {
        title: `Lukas Fischer`,
        description: `Hello! I'm a software engineer from Vienna, Austria who loves learning and developing experiences`,
        author: `@fischinator`,
        twitterUrl: `https://twitter.com/Fischinator`,
        websiteMail: `mail@lukasfischer.me`,
        origin: `https://lukasfischer.me`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Lukas Fischer`,
                short_name: `Lukas Fischer`,
                start_url: `/`,
                background_color: `#040507`,
                theme_color: `#040507`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`
    ]
}
