import Validator from "../util/validators.js"
import createEl from "../util/nodes.js"


export default function PassResetForm(cildren = [], props = {}) {
  const e = createEl
  const v = new Validator()
  const url = document.URL
  function onSubmit(e) {
    e.preventDefault()
    console.log("onSubmit", e)
  }

  const form = e('form')
  const input = e('input', { placeholder: 'email', input: 'text' })

  input.addEventListener("input", (e) => {
    if (!v.validateEmail(input.value)) {
      input.setCustomValidity("Please, enter a correct email address.")
    }
  })

  form.appendChild(input)
  const submitButton = e('input', { type: 'submit', value: 'Submit' })
  submitButton.addEventListener('click', (e) => onSubmit(e))
  form.appendChild(submitButton)
  return form
}

