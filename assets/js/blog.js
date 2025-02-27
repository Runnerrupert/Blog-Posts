const mainSelector = document.querySelector("#main");
const backButton = document.querySelector("#back");
const listSelector = document.querySelector("#list");

let blogs;

function renderBlogs(){
    // Loop through each item in the blogs object array and set content for blog creation
    for (let i = 0; i < blogs.length; i++){
        // Create variables to hold created elements for ease of access
        const li = document.createElement('li');
        const article = document.createElement('article');
        const p = document.createElement('p');
        const blockquote = document.createElement('blockquote');
        const h2 = document.createElement('h2');
        
        const username = blogs[i].username;
        const title = blogs[i].title;
        const content = blogs[i].content;

        p.textContent = "Posted by " + username;
        h2.textContent = title;
        blockquote.textContent = content;

        // Create the articles to hold the users title, content and username
        listSelector.appendChild(li);
        li.appendChild(article);
        article.appendChild(h2);
        article.appendChild(blockquote);
        article.appendChild(p);
    }
}

// Checks if the blogs object array is empty, if it is, then it creates a message in the main element
function checkBlogs(){
    if (blogs === undefined) {
        const noBlogs = document.createElement('p');
        mainSelector.appendChild(noBlogs);
        noBlogs.textContent = "No Blog posts yet...";
        noBlogs.setAttribute('style', "font-size: 24px");
    } else {
        renderBlogs();
    }
}

function initBlogs() {
    const storedBlogs = JSON.parse(localStorage.getItem('myBlogs'));

    if (storedBlogs !== null){
        blogs = storedBlogs;
    }
    checkBlogs();
}

// Add an eventListener to redirect the page back to index.html when the back button is pressed.

backButton.addEventListener('click', function(){
    redirectPage("https://runnerrupert.github.io/Challenge-4/index.html");
})

// Calls the initializer function
initBlogs();