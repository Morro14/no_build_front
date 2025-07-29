import createEl from "../util/nodes.js";


const e = createEl
export default function Test() {
  const container = e('div')
  const button = e('button')
  button.innerHTML = 'fetch'
  const p = e('p',)



  const filePath = '/scripts/components/how_it_works.txt'; // Ensure this file exists

  // Get references to the HTML elements
  const loadButton = button
  const textDisplayArea = p

  // Function to fetch and display the content
  function fetchTextFile() {
    textDisplayArea.textContent = 'Loading...'; // Optional: Show a loading message

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        textDisplayArea.textContent = data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        textDisplayArea.textContent = 'Error loading content: ' + error.message;
      });
  }

  // Add an event listener to the button
  loadButton.addEventListener('click', fetchTextFile);
  container.appendChild(button)
  container.appendChild(p)


  console.log(p.innerHTML)
  return container
}