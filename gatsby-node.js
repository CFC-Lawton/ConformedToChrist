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
  `)
  console.log(data.allPodcastRSSFeedEpisode);

    data.allPodcastRssFeedEpisode.edges.forEach(podcast =>{
      const slug = `/Episode-${podcast.node.item.itunes.episode}-${podcast.node.item.title.split(' ').join('-')}`
      console.log(slug);
      actions.createPage({
        path:slug,
      })
    })
  
}
