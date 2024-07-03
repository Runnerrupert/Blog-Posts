// TODO: Create a variable that selects the form element
const formSelect = document.querySelector("#form");
const formUsername = document.querySelector("#username");
const formTitle = document.querySelector("#title");
const formContent = document.querySelector("#content");

let myBlogs = [];

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

// Initializes myBlogs array with anything that might be in local storage.
function initStoredBlogs(){
  const storedBlogs = JSON.parse(localStorage.getItem('myBlogs'));

  if (storedBlogs !== null){
    myBlogs = storedBlogs;
  }
  return
}

function submitForm(){
  console.log("Submitted form!");

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
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

formSelect.addEventListener('click', function(event) {
  event.preventDefault();

  const element = event.target;
  if (element.matches('input[type=submit]')) {
    submitForm();
  }
})

initStoredBlogs();