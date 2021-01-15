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
                icon: `src/images/favicon.png` // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`
            }
        },
        {
            resolve: `gatsby-plugin-graphql-codegen`,
            options: {
                fileName: `types/graphql-types.ts`,
                codegenDelay: 0
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`
    ]
}
