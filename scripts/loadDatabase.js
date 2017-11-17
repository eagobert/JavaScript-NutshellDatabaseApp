//Purpose: Database interface function to load, save, and clear Nutshell Database
const localInterface = Object.create(null, {

//create a load method interfacing with ajax that returns nutshellDB
   "load": {
       //The load method takes in the value of the "callBackFn" function
        value: (callBackFn) => {

            //using the .ajax function to get the nutShellDB.JSON file
            $.ajax({
                "url": "scripts/nutShellDB.JSON",
                "method": "GET"

            //then...calling a function that runs "callBackFn" and accepts the data input required to make the callback function work.
            }) .then(function(data){
                console.log()
                callBackFn(data)
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