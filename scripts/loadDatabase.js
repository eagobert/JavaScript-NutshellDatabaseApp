//Purpose: Database interface function to load, save, and clear Nutshell Database

const nutshell = require("./nutShellDB")

const localInterface = Object.create(null, {

//create a load method interfacing with ajax that returns nutshellDB
   "load": {
        value: (db) => {
            return $.ajax({
                "url": "scripts/database.JSON",
                "method": "GET"
            }) .then(function(){
                console.log(nutshell())
                return nutshell();
            })
        }
   },
   "save": {
        value: db => localStorage.setItem("nutShellDB", JSON.stringify(db))
   },
   "clear": {
        value: () => localStorage.setItem("nutShellDB", JSON.stringify({}))
   }
})

module.exports = localInterface