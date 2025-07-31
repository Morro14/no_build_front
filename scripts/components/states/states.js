export function pushTextState(path, fileName, description, text) {
  const name = fileName.replaceAll('_', '-')
  const content = { name: name, description: description, text: text }
  // TODO proper path concat
  const pathSplit = path.split('/')
  const lastSegment = pathSplit.pop()
  console.log('psuh state', lastSegment, name)
  const pathNew = lastSegment !== name ? path + '/' + name : path

  history.pushState(content, '', pathNew)
  console.log(history)
}