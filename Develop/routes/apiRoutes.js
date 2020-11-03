const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get('/api/notes', (req, res) => {
    // retrieve all the notes from json
    // res.json(notes);


  fs.readFile("db/db.json","utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
    res.json(notes);
  }); 

})
  // })
  

  app.post('/api/notes', (req, res) => {
    // generate a uuid (google npm uuid)
    uuidv4(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a' 
    // grab the req payload
    const title = req.body.title;
    const text = req.body.text;

    const newNote = {
      id: uuidv4,
      title: title,
      text: text,
    }

    // const jsonData = fs.readFileSync('./../db/db.json', 'utf8');
    const jsonData = fs.readFileSync(__dirname + '/../db/db.json', 'utf8');

    const notes = JSON.parse(jsonData) || [];

    // create a new note in json
    notes.push(newNote)

    // fs.writeFileSync('./../db/db.json', JSON.stringify(notes) )
    fs.writeFileSync(__dirname + '/../db/db.json', JSON.stringify(notes))

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
