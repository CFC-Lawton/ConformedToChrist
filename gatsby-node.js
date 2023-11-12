exports.createPages = async function ({ actions, graphql }) {
  const data = await graphql(`
    query {
      allPodcastRssFeedEpisode {
        edges {
          node {
            id
            item {
              title
              itunes {
                episode
              }
            }
          }
        }
      }
    }
  `)
  console.log(
    " There are " +
      data.data.allPodcastRssFeedEpisode.edges.slice(0, 50).length +
      " pages publishing",
  )

  data.data.allPodcastRssFeedEpisode.edges.slice(0, 50).forEach(edge => {
    const slug = `Episode-${edge.node.item.itunes.episode}`
    console.log(`Building page ${edge.node.item.title}`)

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/podcast.js"),
      context: { id: edge.node.id },
    })
  })
}
