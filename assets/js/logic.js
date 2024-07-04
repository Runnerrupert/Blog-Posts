const lightDarkToggle = document.querySelector("#toggle");
const lightDark = document.querySelector("#lightDark");

storedToggle = getToggleLocalStorage('lightDark');

if (storedToggle !== null){
    toggle = storedToggle;
} else {
    toggle = "light";
}

updateLocalStorage();

lightDarkToggle.addEventListener('click', function(event){
    const element = event.target;
    if (element.matches('button')) {
        if (toggle === "dark") {
            toggle = "light";
            updateLocalStorage();
        } else {
            toggle = "dark";
            updateLocalStorage();
        }
    }
})
// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

function updateLocalStorage(){
    if (toggle === "dark") {
        lightDark.setAttribute('class', "dark");
        lightDarkToggle.innerHTML = "🌒";
        setToggleLocalStorage("lightDark", toggle);
    } else {
        lightDark.setAttribute("class", "light");
        lightDarkToggle.innerHTML = "☀️";
        setToggleLocalStorage("lightDark", toggle);
    }
}

// TODO: Create functions to read and write from local storage

function getToggleLocalStorage(element){
    const mode = localStorage.getItem(element);
    return mode;
}

function setToggleLocalStorage(element, variable){
    localStorage.setItem(element, variable);
}

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};