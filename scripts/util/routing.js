import PassResetForm from "../components/form.js"
import Index from "../components/index_page.js"
import Test from "../components/test.js"

const ROUTES = {
  '/reset-password': PassResetForm,
  '/index': Index,
  '/index/:tab': Index,
  '/test': Test
}

export class Router {
  constructor() {
    this.routes = ROUTES
  }
  resolveRoute(pathname) {
    function matchPath(route, pathname) {
      const routeSplit = route.split('/')
      const pathnameSplit = pathname.split('/')
      let params = {}
      if (routeSplit.length !== pathnameSplit.length) {
        return false
      }

      let match = { isValid: true, params }

      routeSplit.forEach((p, i) => {
        if (p.startsWith(':')) {
          params[p.slice(1)] = pathnameSplit[i]
        } else {
          if (p !== pathnameSplit[i]) {
            console.log(p, pathnameSplit[i])
            match = false
          }
        }
      });

      return match
    }


    const match = Object.keys(ROUTES).find(route => matchPath(route, pathname)
    );


    console.log('matched', match)
    // TODO error element
    if (!match) {
      console.log('The path has not been found.')
      return undefined
    }
    const component = ROUTES[match]

    const params = component.params
    const componentInit = component({ params })
    return componentInit
  }
}

const router = new Router()
export default router







