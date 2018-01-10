const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const User = require('../schemas/UserSchema');

module.exports = function (app, db) {
  app.post('/user', (req, res) => {
    const newUser = new User(req.body);

    newUser.validate(function(err){
      if(err) return res.status(400).send({ error: 'validation error!' });

      db.collection('users').insert(newUser, (err, result) => {
        if(err) return res.status(400).send({'error': 'Error in insert new user'});
        return res.send({ok:'user was created!'});
      }); 
    });

  });
};
