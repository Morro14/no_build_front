import PassResetForm from "./components/form.js"
import resolveRoute from "./util/routing.js"



// const BASE_URL = new URL("http://127.0.0.1:8080/")
const url = new URL(document.URL)
const pathname = url.pathname

// render
const componentBuilder = resolveRoute(pathname)
if (componentBuilder) {
  const main = document.getElementById("main")
  const component = componentBuilder()
  main.appendChild(component)
}


