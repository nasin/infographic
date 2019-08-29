var express = require('express');
var request = require('request'); // Request to communicate with the highcharts cloud
var cors = require('cors'); // Cors to send/receive data in JSON format
var path = require('path'); // To set the public path where the index.html is saved
var bodyParser = require('body-parser');
var config = require('config-json');
var mongoose = require('mongoose'); // Mongoose to communicate with the database

var app = express();
app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(express.json()); // To support JSON-encoded bodies
var port = process.env.PORT || 3000; // Set the server port (to listen) 
var clear = require('clear'); // To cleat screen
var msgCodeOk = 200; // To replace the magic number 200
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

/*** Data Base ***/
config.load('./config.json'); // Load DB logins and passwords
var DBlogin = config.get('dbCredentials', 'DBlogin'); // Retrieve data from the config.json
var DBpwd = config.get('dbCredentials', 'DBpwd'); // MongoBD's username and password
var DBLink = config.get('BLink'); // MongoDB database link
mongoose.connect('mongodb://' + DBlogin + ':' + DBpwd + DBLink, {
  useNewUrlParser: true
}); //Connect to the database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected to the data base :)");
});
// 1. Define the structure of the document: properties and the type of data
var Schema = mongoose.Schema;
var pollsSchema = new Schema({
  name: String,
  answers: []
});
// 2. Create a function constructor to generate mongDB objects to stor data in the MongoDB
var Polls = mongoose.model('Person', pollsSchema)

/*** Test API using AWS Lambda ***/
app.get('/hello', function(req, res) {
  var name = "World";
  if (req.query.name && req.query.name != "") {
    name = req.query.name;
  }
  res.json({
    "message": "hello " + name + "!"
  });
});
app.get('/how', function(req, res) {

  var name = "how";
  if (req.query.name && req.query.name != "") {
    name = req.query.name;
  }
  res.json({
    "message": "how are you " + name + "?"
  });
});
app.post('/where', function(req, res) {
  var name = "... no place ..";
  if (req.query.name && req.query.name != "") {
    name = req.query.name;
  }
  res.json({
    "message": "ok, so you are in  " + name + "?"
  });
});

// ************** Host polls  ***********************************************

// ************** Receive the host poll request
var tempUpDatedPolls = [0, 0, 0, 0];
app.post('/hostPoll', function(reqUp, resUp) {

  var hostPollsReceived = reqUp.body.answers;

  console.log(" Host poll received");
  console.log("reqUp: " + hostPollsReceived);
  console.log(hostPollsReceived[0].answer);

  Polls.findOne({
    name: "hostPolls"
  }, function(err, docs) { // Find the object in the DB 
    if (err) {
      throw err;
    } else {
      for (i = 0; i < hostPollsReceived.length; i++) { // Update the data
        docs.answers[i] = docs.answers[i] + hostPollsReceived[i].answer;
        tempUpDatedPolls[i] = docs.answers[i];
      }
      docs.markModified("answers");
      docs.save(function(err) { //save the data on the DB
        if (err) throw err;
      })
      console.log("tempUpDatedPolls " + tempUpDatedPolls);

      resUp.send({
        status: msgCodeOk,
        from: "/hostpoll",
        answer: docs.answers,
      });

    }
  });
});

// ************** Request data from the db 
app.get('/hostPollGET', function(reqUp, resUp) {

  Polls.findOne({
    name: "hostPolls"
  }, function(err, docs) { //Find the object in the DB
    if (err) {
      throw err;
    } else {
      console.log("docs.answers " + docs.answers);

      resUp.send({
        status: msgCodeOk,
        from: "/hostpoll GET",
        answer: docs.answers,
      });
    }
  });
});

// **************************************************************************
// *************** Player polls *********************************************

// ************** Receive the player poll request

app.post('/playerPoll', function(reqUp, resUp) {

  var playerPollsReceived = reqUp.body.answers;
  var tempUpDatedPlayerPolls = [0, 0, 0, 0, 0, 0];

  console.log(" Player poll received");
  console.log("reqUp: " + playerPollsReceived);
  console.log(playerPollsReceived[0].answer);

  Polls.findOne({
      name: "playerPolls"
    }, function(err, docs){  // Find the object in the DB
    if (err) {
      throw err;
    } else {
      for (i = 0; i < playerPollsReceived.length; i++) { // Update the data
        docs.answers[i] = docs.answers[i] + playerPollsReceived[i].answer;
        tempUpDatedPlayerPolls[i] = docs.answers[i];
      }
      docs.markModified("answers");
      docs.save(function(err) { // Save the data on the DB
        if (err) throw err;
      })
      console.log("tempUpDatedPlayerPolls " + tempUpDatedPlayerPolls);

      resUp.send({
        status: msgCodeOk,
        from: "/playerpoll",
        answer: docs.answers,
      });

    }
  });
});

// ************** Request data from the db
app.get('/playerPollGET', function(reqUp, resUp) {

  Polls.findOne({
    name: "playerPolls"
  }, function(err, docs) { // Find the object in the DB 
    if (err) {
      throw err;
    } else {
      console.log("docs.answers " + docs.answers);

      resUp.send({
        status: msgCodeOk,
        from: "/playerpoll GET",
        answer: docs.answers,
      });
    }
  });
});




// **************************************************************************
// ************** Start *****************************************************
clear(); //clear screen
console.log(' ***** Start session *** ');
console.log(' *****               *** ');


app.listen(3000, function() {
  console.log("App started on port 3000");
});

module.exports = app; // Export the module
