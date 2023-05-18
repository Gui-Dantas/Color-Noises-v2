const router = require("express").Router();

const Note = require("../models/Note.model");

// GET route to retrieve and display all the notes
router.get("/notes", (req, res) => {
  async function findAllNotesFromDb() {
    try {
      // Find all the notes inside the collection
      let allNotesFromDb = await Note.find();
      // Feedback regarding to found books
      // Render all notes from DB with hbs view
      res.render("notes/notes-list.hbs", { notes: allNotesFromDb });
    } catch (error) {
      console.log(error);
    }
  }
  findAllNotesFromDb();
});

// GET route to display the form to create note
router.get("/notes/create", (req, res) => {
  res.render("notes/create-notes.hbs");
});

// POST route to save a new note to the database
router.post("/notes/create", (req, res) => {
  // destructuring the req.body object
  const note = req.body.description;

  async function createNoteInDb() {
    try {
      // Creating the Note in Db
      await Note.create({ note });
      //Feedback regarding the Book Created in Db
      res.redirect("/notes");
    } catch (error) {
      console.log(error);
    }
  }

  createNoteInDb();
});

// GET route to retrieve and display all the books
router.get("/notes", (req, res) => {
  async function findAllNotesFromDb() {
    try {
      // Find all the books inside the collection
      let allNotesFromDb = await Note.find();

      // Render all notes from DB with hbs view
      res.render("notes/notes-list.hbs", { notes: allNotesFromDb });
    } catch (error) {
      console.log(error);
    }
  }
  findAllNotesFromDb();
});

// GET route to display the form to update a specific note
router.get("/notes/:id/edit", (req, res) => {
  // Destructuring the req.params.noteId object
  const { id } = req.params;

  async function findInfoFromANote() {
    try {
      // get info of the note we want to edit
      let noteToEdit = await Note.findById(id);
      // Render info with hbs view
      res.render("notes/note-edit.hbs", noteToEdit);
    } catch (error) {
      console.log(error);
    }
  }

  findInfoFromANote();
});

// POST route to actually make updates on a specific note

router.post("/notes/:id/edit", (req, res) => {
  // destructuring the req.params.noteId
  const noteId = req.params.id;
  const { note } = req.body;

  async function updateANoteFromDb() {
    try {
      let updatedNote = await Note.findByIdAndUpdate(
        noteId,
        { note },
        { new: true }
      );
      res.redirect("/notes");
    } catch (error) {
      console.log(error);
    }
  }
  updateANoteFromDb();
});

// POST route to delete a note from the database

router.post("/notes/:noteId/delete", (req, res) => {
  const { noteId } = req.params;

  async function deleteANoteFromDb() {
    try {
      let deletedNote = await Note.findByIdAndDelete(noteId);
      res.redirect("/notes");
    } catch (error) {
      console.log(error);
    }
  }
  deleteANoteFromDb();
});
module.exports = router;
