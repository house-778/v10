function gra(){
    var bodyElement = document.body;
    var grab = document.getElementById('gra');
    var darkb = document.getElementById('dark');
    var lightb = document.getElementById('light');
    grab.style.display = 'none';
    darkb.style.display = 'block';
    lightb.style.display = 'none';
    bodyElement.classList = [];
    bodyElement.classList.add("gra");
    window.sessionStorage.background = "gra";
}
function dark(){
    var bodyElement = document.body;
    var grab = document.getElementById('gra');
    var darkb = document.getElementById('dark');
    var lightb = document.getElementById('light');
    grab.style.display = 'none';
    darkb.style.display = 'none';
    lightb.style.display = 'block';
    bodyElement.classList = [];
    bodyElement.classList.add("dark");
    window.sessionStorage.background = "dark";
}
function light(){
    var bodyElement = document.body;
    var grab = document.getElementById('gra');
    var darkb = document.getElementById('dark');
    var lightb = document.getElementById('light');
    grab.style.display = 'block';
    darkb.style.display = 'none';
    lightb.style.display = 'none';
    bodyElement.classList = [];
    bodyElement.classList.add("light");
    window.sessionStorage.background = "light";
}
var bodyElement = document.body;
if (window.sessionStorage.background == "") {
    var fullPath = window.location.pathname;
    var fileName = fullPath.split('/').pop();
    if(fileName == "game.html"){
        var bodyElement = document.body;
        var grab = document.getElementById('gra');
        var darkb = document.getElementById('dark');
        var lightb = document.getElementById('light');
        grab.style.display = 'none';
        darkb.style.display = 'block';
        lightb.style.display = 'none';
    }
    bodyElement.classList.add("gra");
    window.sessionStorage.background = "gra";
}
if (window.sessionStorage.background == "gra"){
    var bodyElement = document.body;
    bodyElement.classList = [];
    bodyElement.classList.add("gra");
}else if (window.sessionStorage.background == "light"){
    var bodyElement = document.body;
    bodyElement.classList = [];
    bodyElement.classList.add("light");
}else if (window.sessionStorage.background == "dark"){
    var bodyElement = document.body;
    bodyElement.classList = [];
    bodyElement.classList.add("dark");
}