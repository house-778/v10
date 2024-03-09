function sortButtonsAlphabetically() {
  const buttonsContainer = document.getElementById('buttonsContainer');
  const buttons = Array.from(buttonsContainer.querySelectorAll('.game_button'));

  buttons.sort((a, b) => a.textContent.localeCompare(b.textContent, undefined, { sensitivity: 'base' }));

  buttons.forEach(button => buttonsContainer.appendChild(button));
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

function getCleanFileName(page) {
  var pathArray = page.split('/');
  var fileName = pathArray.pop();
  fileName = fileName.replace('_new', '');
  fileName = fileName.replace(/_/g, ' ');
  fileName = fileName.replace(/-/g, ' ');
  fileName = fileName.replace(/.html/g, '');
  return fileName;
}

function goToPage(page) {
  window.location.href = page;
}

var visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
var visitedPagesContainer = document.getElementById('visitedPages');
visitedPagesContainer.innerHTML = '';

if (visitedPages.length === 0) {
  visitedPagesContainer.innerHTML = '<p style="color: #fff;">You have not played any games on this computer yet.</p>';
} else {
  visitedPages.forEach(function (page) {
      var cleanFileName = getCleanFileName(page);
      visitedPagesContainer.insertAdjacentHTML('beforeend', `<button onclick="goToPage('${page}')">${cleanFileName}</button>`);
  });
}