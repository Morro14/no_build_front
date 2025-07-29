export default function createEl(nodeType, attributes) {
  const node = document.createElement(nodeType)
  if (attributes) {
    const attrsList = Object.entries(attributes)
    attrsList.forEach(([k, v]) => {
      node.setAttribute(k, v)
    });
  }

  return node
}

class Node {
  constructor(nodeType, attributes) {
    this.nodeType
  }
}
export function createElV2(nodeType, attributes) {
  const node = document.createElement(nodeType)
  if (attributes) {
    const attrsList = Object.entries(attributes)
    attrsList.forEach(([k, v]) => {
      node.setAttribute(k, v)
    });
  }
  const construct = () => {

  }
  return node
}