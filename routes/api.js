const fs = require("fs")
const readDb = require("../db/db.json");
const path = require("path");
var notes;

fs.readFile("../db/db.json", "utf8", function(err, data) {
    notes = JSON.parse(data);
  //console.log(data);
});


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(readDb);
    });

    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        notes.push(newNote);
        console.log(notes);
        res.json(readDb);
    });


    app.delete("/api/notes/:id", function(req, res) {
        fs.readFile('../db/db.json', (err, ) => {
            if (err) {
              console.error(err)
              return
            }
            console.log(data)
          })
    });
    
  
    
};