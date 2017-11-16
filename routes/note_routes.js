var ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db){
  app.get('/notes',  (req, res) => {
    db.collection('notes').find({},(err, items) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        items.toArray(function (err, notes) {
          if(err) res.send({'error':'An error has occurred'});
          res.send(notes);
        });
      }
    });
  });

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id':  new ObjectID(id) };
      db.collection('notes').findOne(details, (err) => {
        if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
      });
  });

  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err)=> {
      if(err) {
        res.send({ 'error': 'An error has occurred' })
      } else {
        res.send('Node ' + id + ' deleted!');
      }
    });
  });

  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const {body: {text, title}} = req;
    const note = {text, title};
    db.collection('notes').update(details, note, (err) => {
      if(err){
        res.send({ 'error': 'An error has occurred' })
      } else {
        res.send(note);
      }
    });
  });

  app.post('/notes', (req, res) => {
    const {body: {text, title}} = req;
    if(!text && !title) {
      return res.status(401).send('data is empty!');
    }
    const note = {text, title};

    db.collection('notes').insert(note, (err, result) =>{
      if(err){
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
