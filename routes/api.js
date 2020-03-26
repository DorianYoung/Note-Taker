const fs = require("fs");
const readDb = require("../db/db.json");
const path = require("path");

module.exports = function(app) {
  var notes = require("../db/db.json");

  app.get("/api/notes", function(req, res) {
    res.json(readDb);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    newNote.id = notes.length;
    notes.push(newNote);
    saveNotes();
    res.json({ ok: true });
  });

  app.delete("/api/notes/:id", function(req, res) {
    notes = notes.fitler(test => test.id !== parseInt(req.params.id));
    saveNotes();
    res.json({ ok: true });
  });

  function saveNotes() {
    fs.writeFile("../db/db.json", JSON.stringify(notes), function(err) {
      if (err) throw err;
      console.log("notes saved");
    });
  }
};
