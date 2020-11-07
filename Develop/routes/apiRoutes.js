const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // GET: READ NOTES FROM DB.JSON
  app.get('/api/notes', (req, res) => {

  fs.readFile("db/db.json","utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
    res.json(notes);
  }); 
})

  // POST: CREATING NEW NOTES ON THE APPLICATION
  app.post('/api/notes', (req, res) => {
    // generate a uuid (google npm uuid)
    uuidv4();
    // grab the req payload
    const title = req.body.title;
    const text = req.body.text;
    const id = uuidv4()
    const newNote = {
      id,
      title: title,
      text: text,
    }

    const jsonData = fs.readFileSync(__dirname + '/../db/db.json', 'utf8');
    const notes = JSON.parse(jsonData) || [];

    // ADD NEW NOTE TO DB.JSON
    notes.push(newNote)
    fs.writeFileSync(__dirname + '/../db/db.json', JSON.stringify(notes))

    res.json({
      data: notes,
      id,
    })
  })

//   app.delete("/api/index/:id", function(req, res) {
//     var deleter = notes.filter(note => note.id !== parseInt(req.params.id)); 
//     fs.writeFileSync(__dirname + '/../db/db.json', JSON.stringify(deleter))
//     notes = deleter;
//     res.json(true);
// });

  // app.delete('/api/notes/:id', (req, res) => {
  //   // 
  //   //  req.param.id
  //   // const id = req.query.id;
  //   // filter out the note that has the id passed in, 
  //   // resave the data to db.json
  // })
};
