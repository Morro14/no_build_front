import PassResetForm from "../components/form.js"
import Index from "../components/index_page.js"
import Test from "../components/test.js"

const ROUTES = {
  '/reset-password': PassResetForm,
  '/': Index,
  '/test': Test
}

export default function resolveRoute(pathname) {
  const isValid = pathname in ROUTES
  return isValid ? ROUTES[pathname] : undefined
}