import PassResetForm from "./components/form.js"
import router from "./util/routing.js"



// const BASE_URL = new URL("http://127.0.0.1:8080/")
const url = new URL(document.URL)
const pathname = url.pathname
const main = document.getElementById("main")

// render
const component = router.resolveRoute(pathname)
console.log("component:", component)
if (component) {
  main.appendChild(component)
} else { console.log('Could not find the component') }


