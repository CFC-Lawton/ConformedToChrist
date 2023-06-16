

exports.createPages = async function ({actions, graphql}){
  const data = await graphql(`
    query{
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
  `);
  
   data.data.allPodcastRssFeedEpisode.edges.forEach(edge=>{
      const slug = `Episode-${edge.node.item.itunes.episode}`
      console.log(`Building page ${edge.node.item.title}`)

      actions.createPage({
        path:slug,
        component:require.resolve('./src/templates/podcast.js'),
        context:{id: edge.node.id}
      })
    })
  
}
