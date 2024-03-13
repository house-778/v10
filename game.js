function sortButtonsAlphabetically() {
  const buttonsContainer = document.getElementById('buttonsContainer');
  const buttons = Array.from(buttonsContainer.querySelectorAll('.game_button'));

  buttons.sort((a, b) => a.textContent.localeCompare(b.textContent, undefined, { sensitivity: 'base' }));

  buttons.forEach(button => buttonsContainer.appendChild(button));
}
function deleatGameY(){
  const storedURLs = localStorage.getItem('visitedPages');
  localStorage.removeItem('visitedPages');
  document.getElementById("visitedPages").innerHTML = "";
  createButtons()
}

function searchGames() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const buttons = document.querySelectorAll(".game_button");

  buttons.forEach(button => {
    const txtValue = button.innerText || button.textContent;
    button.style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
  });

  sortButtonsAlphabetically();
}

window.addEventListener('load', () => sortButtonsAlphabetically());
function getStoredURLs() {
  const storedURLs = localStorage.getItem('visitedPages');
  return storedURLs ? JSON.parse(storedURLs) : [];
}
function getCleanButtonText(url) {
  return url.split('/').pop().replace(/[-]/g, ' ').replace('_new.html', '');
}
function createButtons() {
  const urls = getStoredURLs();
  const container = document.getElementById('visitedPages');
  urls.forEach(url => {
    const button = document.createElement('button');
    button.textContent = getCleanButtonText(url);
    button.setAttribute('onclick', "window.loaction.href = '"+url+"'");
    container.append(button);
  });
}
window.onload = createButtons;
