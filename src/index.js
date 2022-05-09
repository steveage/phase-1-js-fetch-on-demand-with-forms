const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', processSelection)
}

document.addEventListener('DOMContentLoaded', init);

function processSelection(event) {
    event.preventDefault();
    const inputUI = document.getElementById('searchByID');
    const selectedId = inputUI.value;
    const uri = `http://localhost:3000/movies/${selectedId}`;
    fetch(uri)
    .then(response => response.json())
    .then(data => processMovieData(data));
}

function processMovieData(json) {
    const titleUI = document.querySelector('section#movieDetails h4');
    const summaryUI = document.querySelector('section#movieDetails p');
    titleUI.innerText = json.title;
    summaryUI.innerText = json.summary;
}