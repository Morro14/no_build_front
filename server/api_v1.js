import { baseURL } from "../index.js"

class nodeAPI_ {
  actions = { getURL: this.getURL }

  get(APIurl) {
    r = /^api\/.+$/g
    hasPrefix = /^api\/.+$/.test(APIurl)
    pref = /api\//
    APIurlFormatted = APIurl.replace(pref, "")
    console.log('APIurl formatted:', APIurlFormatted)
    isAction = APIurlFormatted in this.actions
    if (!hasPrefix || !isAction) {
      return { status: 404, message: "Bad request" }
    }
    action = this.actions[APIurl]
    result = action()
    return result
  }
  getURL() {
    console.log('getURL', baseURL)
    return baseURL
  }

}

export const nodeAPI = new nodeAPI_()