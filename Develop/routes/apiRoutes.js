// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const fs = require('fs');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get('/api/notes', (req, res) => {
    // retrieve all the notes from json
    
  })

  app.post('/api/notes', (req, res) => {

    // generate a uuid (google npm uuid)

    // grab the req payload
    const title = req.body.title;
    const text = req.body.text;

    const newNote = {
      id: uuid,
      title: title,
      text: text,
    }

    const jsonData = fs.readFileSync('./../db/db.json', 'utf-8');

    const notes = JSON.parse(jsonData) || [];

    // create a new note in json
    notes.push(newNote)

    fs.writeFileSync('./../db/db.json', JSON.stringify(notes) )

    res.json({
      data: notes,
    })


  })

  app.delete('/api/notes/:id', (req, res) => {
    // 
    //  req.param.id
    const id = req.query.id;

    // filter out the note that has the id passed in, 
    // resave the data to db.json


  })
};
