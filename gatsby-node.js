const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const addSlugToMarkdownRemark = (node, getNode, createNodeField) => {
    const slug = createFilePath({
        node,
        getNode,
        basePath: "data/projects"
    })

    createNodeField({
        node,
        name: "slug",
        value: slug
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === "MarkdownRemark") {
        addSlugToMarkdownRemark(node, getNode, createNodeField)
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const { data, errors } = await graphql(`
        query ProjectPageSlugs {
            allFile(filter: { relativePath: { regex: "/^data/projects/" } }) {
                nodes {
                    childMarkdownRemark {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (errors) {
        reporter.panicOnBuild(
            `Error while running GraphQL query (ProjectPageSlugs).`
        )
        return
    }

    data.allFile.nodes.forEach(({ childMarkdownRemark }) => {
        createPage({
            path: childMarkdownRemark.fields.slug,
            component: path.resolve(`./src/templates/project.tsx`),
            context: {
                slug: childMarkdownRemark.fields.slug
            }
        })
    })
}
