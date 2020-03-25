const fs = require("fs")
const readDb = require("../db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(readDb);
    });

    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        readDb.push(newNote);
        res.json(readDb);
    });

    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        fs.writeFile("../db/db.json", newNote, "utf-8");
        readDb.push(newNote);
        res.json(readDb);
    });
    
  
    
};