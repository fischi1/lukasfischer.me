module.exports = {
    siteMetadata: {
        title: `Lukas Fischer`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
                './src/**/*.{ts,tsx}',
                './node_modules/gatsby-*/**/*.js',
              ],
              codegenDelay: 200,
            }
        },
        `gatsby-transformer-remark`
    ]
}
