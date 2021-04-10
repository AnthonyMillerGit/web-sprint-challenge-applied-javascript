import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const divTopics = document.createElement('div')
  const tabOne = document.createElement('div')
  const tabTwo = document.createElement('div')
  const tabThree = document.createElement('div')

  divTopics.appendChild(tabOne)
  divTopics.appendChild(tabTwo)
  divTopics.appendChild(tabThree)

  divTopics.classList.add('topics')
  tabOne.classList.add('tab')
  tabTwo.classList.add('tab')
  tabThree.classList.add('tab')

  tabOne.textContent = topics[0]
  tabTwo.textContent = topics[1]
  tabThree.textContent = topics[2]

  return divTopics
}

const tabsContainer = document.querySelector('.tabs-container')

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
  .get(`https://lambda-times-api.herokuapp.com/topics`)
  .then((response) => {
    // console.log(response)
    // console.log(response.data)
    // console.log(response.data.topics)
    const topics = response.data.topics
    tabsContainer.appendChild(Tabs(topics))

  })
  .catch((error) => {
    console.log(error)
  })
}

export { Tabs, tabsAppender }
