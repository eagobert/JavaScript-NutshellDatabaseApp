const findUserName = require("./findUserName")
// Author Deanna - this module looks for the messages in local storage
// and displays it on the screen in the chat history
//wrap in a function
const displayChatMessages = function (database) {
    //let parseSession = JSON.parse(localStorage.getItem("nutShellDB"))
    let existingMessages = database().chat
    let chatName = database().chat

    // const database = require("./nutShellDB");
    console.log("chatdb", existingMessages)


    // Set up write option
    const chatEl = document.getElementById("chatMessages")
    const nameEl = document.getElementById("chatname")

    /* chatName.forEach(username => {
        console.log("usernameCHAT", username.userName)
        nameEl.innerHTML =
        nameEl.innerHTML += `
            <p>${username.userName}</p>
        `
    }) */

    // See if chat messages exist in the local db
    console.log("length", existingMessages.length)
    if (existingMessages.length > 0) {
        console.log("we have chats in localstorage")
        chatEl.innerHTML = ""
        // Iterate through all the messages in the database to show them on the browser
        existingMessages.forEach(messages => {
            let currentUsername = findUserName(messages.userId)
            console.log(messages.chatInput)
            // Write messages and their related userids to the browser
            chatEl.innerHTML +=
                `
            <article>
                <p>${currentUsername}</p>
                <p>${messages.chatInput}</p>
            </article>
            `
            //If there are no chats yet display message
        })
    }
    else {
        console.log("else stmt");
        chatEl.innerHTML =
            `
    <article>
    <p>There are no chat messages yet</p>
    </article>
    `
    }
}

// look for new messages - add this later


//export this module
module.exports = displayChatMessages

