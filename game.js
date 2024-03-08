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
function searchGames() {
    var input, filter, buttons, button, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    buttons = document.getElementsByClassName("game_button");

    for (i = 0; i < buttons.length; i++) {
        button = buttons[i];
        txtValue = button.innerText || button.textContent;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            button.style.display = "none";
            button.style.display = "";
        } else {
            button.style.display = "none";
        }
    }
}
var visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
var visitedPagesContainer = document.getElementById('visitedPages');
visitedPagesContainer.innerHTML = '';
if (visitedPages.length === 0) {
  visitedPagesContainer.innerHTML += '<p style = "color: #fff;">You have not played any games on this conputer yet.</p>';
} else {
  visitedPages.forEach(function (page) {
  var cleanFileName = getCleanFileName(page);
  visitedPagesContainer.innerHTML += `<button onclick="goToPage('${page}')">${cleanFileName}</button>`;
  });
}
 
