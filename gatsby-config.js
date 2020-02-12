module.exports = {
    siteMetadata: {
        title: `Lukas Fischer`,
        description: `Hello! I'm a software engineer from Vienna, Austria who loves learning and developing experiences`,
        author: `@fischinator`,
        twitterUrl: `https://twitter.com/Fischinator`,
        websiteMail: `mail@lukasfischer.me`
    },
    plugins: [
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
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-graphql-codegen`,
            options: {
                fileName: `types/graphql-types.ts`,
                documentPaths: [
                    "./src/**/*.{ts,tsx}",
                    "./node_modules/gatsby-*/**/*.js"
                ],
                codegenDelay: 200
            }
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Montserrat`,
                    },
                    {
                        family: `Ubuntu`,
                        variants: [`400`, `500`]
                    }
                ],
                fontDisplay: `swap`
            }
        }
    ]
}
