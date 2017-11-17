//Author Ray - this module checks for the existence of a database in local storage if none exists it creates an empty database

// Required Files....(Erin)
const localInterface = require("../scripts/loadDatabase")

const nutShellDB = function (){
    // //set database to = whatever is in local storage
    let database = JSON.parse(localStorage.getItem("nutShellDB"))
        if (database !== null){
            console.log("we have localstorage")
            console.log(database)
         //if database does not exist set database to empty arrays
        } else{
                database = {
                "users":[],//{"id": 1 "username": koolkev "email": koolkev@mail}
                "events":[],//{"id": 1 "userId": 1 "name": Foo " date": 1/1/18 "location": 123 Fooville st.}
                "tasks":[],//{"id": 1 "userId": 1 "name": task name "expectedCompletion" : 1/1/18}
                "chat":[],//{"id": 1 "userId": 1 "message": Sup "timeStamp" : date.now()}
                "friends":[],//{"id": 1 "userId": 1 "friendId": 1}
                "articles":[],//{"id": 1 "userId": 1 "title": Foo "synopsis": stuff happened "url": www.website.com "timeStamp" : date.now()}
            }
            console.log(database)
        }
    //return the database
    return database
}
module.exports = nutShellDB