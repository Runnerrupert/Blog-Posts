// Creates class selectors for form.html
const formSelect = document.querySelector("#form");
const formUsername = document.querySelector("#username");
const formTitle = document.querySelector("#title");
const formContent = document.querySelector("#content");

// Object array to hold all blog objects.
let myBlogs = [];

// Initializes myBlogs array with anything that might be in local storage.
function initStoredBlogs(){
  const storedBlogs = JSON.parse(localStorage.getItem('myBlogs'));

  if (storedBlogs !== null){
    myBlogs = storedBlogs;
  }
  return
}


// Checks to see if all sections are filled in. Creates a new blog object and pushes it to an array, stores the array in local storage and redirects the page to blog.html
function submitForm(){
  console.log("Submitted form!");

  const blogUsername = formUsername.value;
  const blogTitle = formTitle.value;
  const blogContent = formContent.value;

  if (blogUsername === "" || blogTitle === "" || blogContent === ""){
    const errorMsg = document.createElement("p");
    formSelect.appendChild(errorMsg);
    errorMsg.setAttribute('id', 'error');
    errorMsg.textContent = "Please fill in all sections";

    console.log("Form incomplete");

    return;
  }

  const blogs = {
    username: formUsername.value.trim(),
    title: formTitle.value.trim(),
    content: formContent.value.trim()
  }

  myBlogs.push(blogs);

  formUsername.value = "";
  formTitle.value = "";
  formContent.value = "";

  localStorage.setItem('myBlogs', JSON.stringify(myBlogs));

  redirectPage("https://runnerrupert.github.io/Challenge-4/blog.html")
}

// Add an eventListener for when the submit button is pressed
formSelect.addEventListener('click', function(event) {
  event.preventDefault();

  const element = event.target;
  if (element.matches('input[type=submit]')) {
    submitForm();
  }
})

// Initializes the first function
initStoredBlogs();