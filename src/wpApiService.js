// wpApiService.js
import apiUrl from './config.js'

async function getPageContent(postId) {
  try {
    const response = await fetch(`${apiUrl}/wp-json/wp/v2/pages/${postId}`)

    if (!response.ok) {
      throw new Error('Failed to fetch post content')
    }

    const postData = await response.json()
    const pageTitle = postData.title.rendered
    let postContent = postData.content.rendered

    // Identify paragraphs and wrap consecutive figures following each paragraph
    const paragraphsAndFigures = postContent
      .split('<p>')
      .map((segment) => {
        if (segment.includes('</p>')) {
          // This segment contains a paragraph
          const [paragraph, ...figures] = segment.split('</p>')

          // Remove any empty strings from figures array
          const filteredFigures = figures.filter(
            (figure) => figure.trim() !== ''
          )

          if (filteredFigures.length > 0) {
            // Wrap figures with a <div> only if there are non-empty figures
            return `<p>${paragraph}</p><div class="figure-group">${filteredFigures.join(
              '</p>'
            )}</div>`
          } else {
            // If no non-empty figures, return the paragraph as is
            return `<p>${paragraph}</p>`
          }
        }
        return segment
      })
      .join('')

    return { title: pageTitle, content: paragraphsAndFigures }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export { getPageContent }
