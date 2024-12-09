

const button = document.querySelector(".container button");
const getCharacterDiv = document.querySelector(".container .character p");


button.addEventListener("click", getCharacter);

async function getCharacter() {
  // Generate a random ID between 1 and 83 (Star Wars API supports this range)
  const randomId = Math.floor(Math.random() * 83) + 1;

  try {
    const response = await fetch(`https://swapi.dev/api/people/${randomId}`);
    

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const characterData = await response.json();


    const name = characterData.name || "Unknown";
    const birthYear = characterData.birth_year || "Unknown";
    const films = characterData.films || [];
    const species = characterData.species || [];
    const homeworld = characterData.homeworld || "Unknown";

    // Create an output string for the character
    const characterInfo = `
      <strong>Name:</strong> ${name}<br>
      <strong>Birth Year:</strong> ${birthYear}<br>
      <strong>Films:</strong> ${films.length ? films.join(", ") : "None"}<br>
      <strong>Species:</strong> ${species.length ? species.join(", ") : "Unknown"}<br>
      <strong>Homeworld:</strong> ${homeworld}
    `;

    // Display the character info in the DOM
    getCharacterDiv.innerHTML = characterInfo;

  } catch (error) {
    getCharacterDiv.innerHTML = `Error: ${error.message}`;
  }
}































// const button = document.querySelector(".container button");
// const getCharacterDiv = document.querySelector(".container .character p");

// document.addEventListener("DOMContentLoaded", getCharacter);

// button.addEventListener("click", getCharacter);

// async function getCharacter() {
//  fetch("https://swapi.dev/api/people")
//  .then(data => data.json())
//  .then(obj => charText.innerHTML = obj.people)


// }