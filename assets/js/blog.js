// TODO: Create a variable that selects the main element
const mainSelector = document.querySelector("#main");
const backButton = document.querySelector("#back");
const listSelector = document.querySelector("#list");

let blogs;

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

function initBlogs() {
    const storedBlogs = JSON.parse(localStorage.getItem('myBlogs'));

    if (storedBlogs !== null){
        blogs = storedBlogs;
    }
}

// TODO: Call the function to render the list of blog posts

initBlogs();