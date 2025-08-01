import createEl from "../util/nodes.js";
import { pushTextState } from "./states/states.js";

const e = createEl
export default function Index({ params }) {
  const url = new URL(document.URL)
  let currentTab = url.pathname
  console.log('url:', currentTab)
  console.log('params', params)
  let state = { fileName: '' }

  const container = e('div', { class: "container", id: "index-container" })
  const title = e('h1',)
  title.innerHTML = "Welcome"

  const containerP = e('div', { class: "container-p", id: "index-container-p" })
  const p1 = e('p', { id: 'index-p-1', class: 'index-p' })
  p1.innerHTML = "Create your own remote file tree to sort files from one or multiple cloud storage provider."
  const p2 = e('p', { id: 'index-p-2', class: 'index-p' })
  p2.innerHTML = "Add descriptions, tags, categories and dates to files in your catalog to make navigation easier."
  const p3 = e('p', { id: 'index-p-3', class: 'index-p' })
  p3.innerHTML = 'Export or download your catalog.'
  const signUpButton = e('button', { id: 'btn-index-signup', class: 'btn', type: 'button' })
  signUpButton.innerHTML = 'Sign Up'
  const p4 = e('p')
  p4.innerHTML = 'This application is designed to help you with managing files that are stored with cloud storage services (etc. google drive or yandex disk).'
  const navBar = e('div', { id: "index-navbar" })
  const navLink1 = e('div', { id: "nav-link-1", class: "nav-link" })
  navLink1.innerHTML = "How it works"
  const navLink2 = e('div', { id: "nav-link-1", class: "nav-link" })
  navLink2.innerHTML = "Preview"
  const navLink3 = e('div', { id: "nav-link-1", class: "nav-link" })
  navLink3.innerHTML = "Github"
  const textBlock1Content = '---'
  const textBlock1 = e('div', { id: 'text-block-1', class: 'text-block' })
  textBlock1.innerHTML = textBlock1Content

  containerP.appendChild(p1)
  containerP.appendChild(p2)
  containerP.appendChild(p3)

  navBar.appendChild(navLink1)
  navLink1.addEventListener('click', async (e) => navOnClick(e, 'how_it_works'))
  navBar.appendChild(navLink2)
  navLink2.addEventListener('click', async (e) => navOnClick(e, 'preview'))
  navBar.appendChild(navLink3)
  navLink3.addEventListener('click', async (e) => navOnClick(e, 'github'))
  history.replaceState({ description: '', text: textBlock1Content, name: '' }, '', document.location.href)
  window.addEventListener('popstate', (event) => {
    event.preventDefault()
    console.log('popstate', window.history)
    displayState(event.state)
  })

  function displayState({ description, name, text }) {
    textBlock1.innerHTML = text
  }
  async function navOnClick(e, url) {
    const text = await fetch(`/scripts/components/texts/${url}.txt`).then((response) => {
      if (!response.ok) {
        console.log(response)
      } else return response.text()
    }).then(response => {
      return response
    })
    textBlock1.innerHTML = text
    const path = currentTab
    pushTextState(path, url, 'text for index page tab block', text)

  }

  container.appendChild(title)
  container.appendChild(containerP)
  container.appendChild(signUpButton)
  container.appendChild(p4)
  container.appendChild(navBar)
  container.appendChild(textBlock1)

  return container
}



