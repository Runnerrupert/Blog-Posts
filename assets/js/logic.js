const lightDarkToggle = document.querySelector("#toggle");

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// TODO: Create functions to read and write from local storage

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};