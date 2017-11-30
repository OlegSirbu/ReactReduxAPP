const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db){
  app.get('/notes',  (req, res) => {
    const {limit = 10, page = 1} = req.query;
    const params = { skip: (page-1) * limit, limit: +limit };

    db.collection('notes').find({}, params).toArray((err, notes) => {
      if(err) res.send({'error':'An error has occurred'});
      res.send(notes);
    });
  });

  app.get('/notes-count', (req, res) => {
    db.collection('notes',(err, coll)=>{
      coll.count((err, count) => {
        res.send(count.toString());
      });
    });
  });

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id':  new ObjectID(id) };

    db.collection('notes').findOne(details, (err) => {
      if (err) return res.send({'error':'An error has occurred'});
      res.send(item);
    });
  });

  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err) => {
      if(err) return res.send({ 'error': 'An error has occurred' });
      res.send('Node ' + id + ' deleted!');
    });
  });

  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const {body: {text, title}} = req;
    const note = {text, title};

    db.collection('notes').update(details, note, (err) => {
      if(err) return res.send({ 'error': 'An error has occurred' });
      res.send(note);
    });
  });

  app.post('/notes', (req, res) => {
    const {body: {text, title}} = req;
    if(!text && !title) return res.status(401).send('data is empty!');

    const note = {text, title};
    db.collection('notes').insert(note, (err, result) => {
      if(err) return res.send({'error': 'An error has occurred'});
      res.send(result.ops[0]);
    });
  });
};
