import http from 'node:http';
import fs from 'node:fs'
import path from 'node:path'
import { nodeAPI } from "./server/api_v1.js"

const PORT = '8080'
const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "application/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const LOCAL_PATH = path.join(process.cwd())
const toBool = [() => true, () => false];


const prepareFile = async (url) => {
  const paths = [LOCAL_PATH]
  let ext = path.extname(url)
  const isFile = !(ext === '')
  let filePath = isFile ? path.join(LOCAL_PATH, url) : path.join(LOCAL_PATH, 'index.html')
  console.log('File path', filePath)
  switch (url) {
    case /^api\/.+$/g.test(url):
      console.log('switch')
      const data = nodeAPI.get(url)
      return { isApi: true, data: data }
  }
  console.log('Path', filePath)
  const pathTraversal = !filePath.startsWith(LOCAL_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  if (!found) return { found }
  const streamPath = filePath
  ext = path.extname(streamPath).substring(1).toLowerCase()

  // const streamPath = found ? filePath : `${LOCAL_PATH}/404.html`;
  const stream = fs.createReadStream(streamPath)
  return { found, ext, stream, filePath }
}

const server = http.createServer(async (req, res) => {
  const file = await prepareFile(req.url)
  console.log('file', file.found)
  const statusCode = file.found ? 200 : 404;
  console.log(MIME_TYPES[file.ext])
  const MIME_TYPE = MIME_TYPES[file.ext] || MIME_TYPES.default
  res.writeHead(statusCode, { 'Content-Type': MIME_TYPE });

  if (file.found) {
    file.stream.pipe(res)
  }

})
export let baseURL = ''
server.listen(PORT, () => {
  baseURL = server.address()
})

console.log(`Server running at http://127.0.0.1:${PORT}/`)