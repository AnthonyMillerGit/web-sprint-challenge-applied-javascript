import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div')
  const divHeadline = document.createElement('div')
  const divAuthor = document.createElement('div')
  const divImg = document.createElement('div')
  const imgsrc = document.createElement('img')
  const authorName = document.createElement('span')

  card.appendChild(divHeadline)
  card.appendChild(divAuthor)
  divAuthor.appendChild(divImg)
  divImg.appendChild(imgsrc)
  divAuthor.appendChild(authorName)

  card.classList.add('card')
  divHeadline.classList.add('headline')
  divAuthor.classList.add('author')
  divImg.classList.add('img-container')
  
  imgsrc.setAttribute('src', article.authorPhoto)

  divHeadline.textContent = article.headline
  authorName.textContent = article.authorName

  return card
}

const cardContainer = document.querySelector('.cards-container')

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((response) => {
    console.log(response)
    console.log(response.data)
    console.log(response.data.articles)
    // console.log(response.data.articles.javascript)
    // console.log(response.data.articles.javascript[0])
    const javascriptArticles = response.data.articles.javascript
    const bootstrapArticles = response.data.articles.bootstrap
    const technologyArticles = response.data.articles.technology
    const jqueryArticles = response.data.articles.jquery
    const nodeArticles = response.data.articles.node


    javascriptArticles.forEach((article) => {
      const articleCard = Card(article)
      cardContainer.appendChild(articleCard)
    })
    bootstrapArticles.forEach((article) => {
      const articleCard = Card(article)
      cardContainer.appendChild(articleCard)
    })
    technologyArticles.forEach((article) => {
      const articleCard = Card(article)
      cardContainer.appendChild(articleCard)
    })
    jqueryArticles.forEach((article) => {
      const articleCard = Card(article)
      cardContainer.appendChild(articleCard)
    })
    nodeArticles.forEach((article) => {
      const articleCard = Card(article)
      cardContainer.appendChild(articleCard)
    })

  })
  .catch((error) => {
    console.log(error)
  })
}

export { Card, cardAppender }
