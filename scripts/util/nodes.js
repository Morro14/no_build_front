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
