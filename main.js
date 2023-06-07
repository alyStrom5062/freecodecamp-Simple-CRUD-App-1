let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let data = {}

// Listens if submit button is pressed and runs form validation function each time it is.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button Pressed")
    formValidation();
})

// Form validation function for if form is blank and accepts data if it isn't
let formValidation = () => {
    if (input.value === ""){
        msg.innerHTML = "Post cannot be blank"
        console.log("Failure")
    } else {
        console.log("Success")
        msg.innerHTML = "";
        acceptData();
    }

};

// Grabs data from form and calls the function to create the post.
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost()
};

// Adds the post content in an HTML view and appends it to the page.
let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `;
};

// Function to delete a post.
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

// Function to edit a post.
let editPost = (e) => {
    input.value = e.parentElement.preventElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

