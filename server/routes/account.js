const express = require('express');
const client = require('../config/db.js');

const app = express.Router();

// Login
app.post('/account/Login', async (req, res, next) => {

  // incoming: login, password
  // outgoing: id, firstName, lastName, error
  await client.connect();
  var error = '';
  var status = 200;
  
  console.log("Received GET to /account/Login");
  
  const { login, password } = req.body;

  const db = await client.db('Large-Project');
  const results = await db.collection('TestUsers').find({Login:login,Password:password}).toArray();

  var id = '-1';
  var fn = '';
  var ln = '';

  if( results.length > 0 ) {
    id = results[0]._id;
    fn = results[0].FirstName;
    ln = results[0].LastName;
  }

  if (fn.length == 0 && ln.length == 0) {
    error = '';
    status = 400
    var ret = {UserId:id, FirstName:fn, LastName:ln, Error:error, Status:status};
  }
  
  var ret = {UserId:id, FirstName:fn, LastName:ln, Error:error, Status:status};

  res.status(status).json(ret);
});

// Register new user account (POST)
app.post('/account/Register', async (req, res, next) => {
  // incoming: login, password
  // outgoing: FirstName, LastName, Email, Phone, Login, Password, Error
  await client.connect();
  const { firstName, lastName, email, phone, login, password } = req.body;
  console.log("Received POST to /account/Register");
  var id = '-1';

  let newUser = {
    //UserId: req.body.id,
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Phone: phone,
    Login: login,
    Password: password
  };
  
  const db = await client.db('Large-Project');

  var error = '';
  var status = 200;

  let temp = await db.collection('TestUsers').findOne({$or: [
    {Email:email},
    {Login:login}
  ]});

  if (temp == null) {
    var ret = await db.collection('TestUsers').insertOne(newUser);
  }
  
  else if (newUser.Login == temp.Login) {
    status = 409;
    var ret = {UserId:id, FirstName:'', LastName:'', Email:'', Phone:'', Login:'', Password:'', Error:error, Status:status};
  }

  else {
    status = 409;
    var ret = {UserId:id, FirstName:'', LastName:'', Email:'', Phone:'', Login:'', Password:'', Error:error, Status:status};
  }

  res.status(status).json(ret);
});

module.exports = app;