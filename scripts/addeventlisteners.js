//author Ray  //Purpose: This module adds event listeners to the register and login buttons on the welcome screen
const userFactory = require("./userFactory")
const addUser = require("./addUserToDatabase")
const setVisibility = require("./setVisibility")
const setActiveUser = require("./activeUser")
const validateExistingUser = require("./validateExistingUser")
const validateNewUser = require("./validateNewUser")
const chat = require("./chat/displayChatMessage")
const events = require("./event/displayEvents")
const database = require("./nutShellDB")
const article = require("./articles/displayArticles")
const displayTasks = require("./tasks/displayTasks")
const displayOnline = require("./Friends/displayfriends")


const login = document.querySelector(".button--login")
const register = document.querySelector(".button--newAccount")
const form = document.getElementById("loginForm")



//add event listener to the register button
register.addEventListener("click", (event) => {
    //grab the username and email entered into the form
    const username = document.querySelector("input[name='username']").value
    const email = document.querySelector("input[name='email']").value
    //pass the username and email to the validateNewUser function when the register button is pressed.
    validateNewUser(username, email)
    chat(database)
    events(database)
    article(database)
    displayOnline(database)
    displayTasks(database)
    form.reset()
})



//add eventlistener to the login button
login.addEventListener("click", (event)=>{
    //grab the username and email from the login form
    const username = document.querySelector("input[name='username']").value
    const email = document.querySelector("input[name='email']").value
    //pass the username and email to the validateExistingUser Module \
    validateExistingUser(username, email)
    chat(database)
    events(database)
    article(database)
    displayOnline(database)
    displayTasks(database)
    form.reset()
})